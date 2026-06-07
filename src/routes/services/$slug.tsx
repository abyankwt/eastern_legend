import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { BlueprintGrid } from "@/components/site/BlueprintGrid";
import { CheckCircle2, ArrowRight, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { SERVICES } from "@/lib/services-data";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/constants";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData: service }) => {
    if (!service) return {};
    const schemas = [
      generateServiceSchema(service),
      generateBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Services", url: `${SITE_URL}/services` },
        { name: service.title, url: `${SITE_URL}/services/${service.slug}` },
      ]),
    ];
    if (service.faqs.length > 0) {
      schemas.push(generateFAQSchema(service.faqs));
    }
    return {
      meta: [
        { title: service.metaTitle },
        { name: "description", content: service.metaDescription },
        { property: "og:title", content: service.headline },
        { property: "og:description", content: service.metaDescription },
        { property: "og:url", content: `${SITE_URL}/services/${service.slug}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/services/${service.slug}` }],
      scripts: schemas.map((s) => ({ type: "application/ld+json", children: JSON.stringify(s) })),
    };
  },
  component: ServiceDetailPage,
});

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold leading-snug">{q}</span>
        {open ? (
          <ChevronUp size={20} className="mt-0.5 shrink-0 text-accent" />
        ) : (
          <ChevronDown size={20} className="mt-0.5 shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
}

function ServiceDetailPage() {
  const service = Route.useLoaderData();

  const relatedServices = SERVICES.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark pt-36 pb-24 text-white md:pt-48 md:pb-32">
        <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
        <div
          className="absolute right-0 top-0 h-full w-1/3 origin-top-right -skew-x-6 bg-accent/5"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent"
          aria-hidden
        />
        <div className="container-page relative">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs text-white/50"
          >
            <Link to="/" className="hover:text-white/80">
              Home
            </Link>
            <span>/</span>
            <Link to="/services/" className="hover:text-white/80">
              Services
            </Link>
            <span>/</span>
            <span className="text-white/80">{service.title}</span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {service.category}
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] text-white! text-balance md:text-5xl lg:text-[3.5rem]">
            {service.headline}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-white"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+96566935287"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal>
                <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                  {service.intro.split("\n\n").map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={80}>
              <div className="rounded-xl border border-border bg-muted/40 p-7">
                <h2 className="text-base font-bold uppercase tracking-wide text-primary">
                  What&apos;s Included
                </h2>
                <ul className="mt-5 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Content sections */}
      {service.sections.map((section, i) => (
        <section
          key={i}
          className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-muted/40" : "bg-background"}`}
        >
          <div className="absolute inset-x-0 h-px bg-border" />
          <div className="container-page max-w-4xl">
            <Reveal>
              <h2 className="text-2xl font-bold md:text-3xl">{section.heading}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{section.body}</p>
              {section.bullets && (
                <ul className="mt-6 space-y-3">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <ArrowRight size={16} className="mt-0.5 shrink-0 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </section>
      ))}

      {/* Industries + Areas */}
      <section className="bg-primary py-16 text-white md:py-20">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="text-xl font-bold text-white!">Industries We Serve</h2>
            <ul className="mt-5 space-y-2.5">
              {service.industries.map((ind) => (
                <li key={ind} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {ind}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-xl font-bold text-white!">
              <MapPin size={18} className="mr-2 inline text-accent" />
              Service Areas in Kuwait
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="bg-background py-16 md:py-20">
          <div className="container-page max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-secondary" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                  FAQ
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">Frequently Asked Questions</h2>
            </Reveal>
            <div className="mt-8">
              {service.faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="bg-muted/40 py-16 md:py-20">
          <div className="absolute inset-x-0 h-px bg-border" />
          <div className="container-page">
            <Reveal>
              <h2 className="text-2xl font-bold">Related Services</h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedServices.map((rel, i) => (
                <Reveal key={rel.slug} delay={i * 50}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: rel.slug }}
                    className="group block rounded-xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                      {rel.category}
                    </span>
                    <h3 className="mt-2 font-semibold leading-snug">{rel.title}</h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary-dark py-20 text-white md:py-24">
        <BlueprintGrid />
        <div className="container-page relative">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Get Started
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-bold text-white! md:text-4xl">
              Ready to discuss your project?
            </h2>
            <p className="mt-4 text-white/75">
              Share your requirements with our team and we will provide a clear, structured response
              with the right approach for your project.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-white"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/96566935287"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20bb5a]"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+96566935287"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Call +965 6693 5287
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
