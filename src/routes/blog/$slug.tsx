import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Clock, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SERVICES } from "@/lib/services-data";
import {
  generateBlogPostSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/constants";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData: post }) => {
    if (!post) return {};
    const schemas = [
      generateBlogPostSchema(post),
      generateBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Blog", url: `${SITE_URL}/blog` },
        { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
      ]),
    ];
    if (post.faqs.length > 0) {
      schemas.push(generateFAQSchema(post.faqs));
    }
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.metaDescription },
        { property: "og:url", content: `${SITE_URL}/blog/${post.slug}` },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.publishDate },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/blog/${post.slug}` }],
      scripts: schemas.map((s) => ({ type: "application/ld+json", children: JSON.stringify(s) })),
    };
  },
  component: BlogPostPage,
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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogPostPage() {
  const post = Route.useLoaderData();
  const relatedServices = SERVICES.filter((s) => post.relatedServices.includes(s.slug));

  return (
    <SiteLayout>
      {/* Article header */}
      <section className="relative overflow-hidden bg-primary-dark pt-36 pb-16 text-white md:pt-48 md:pb-20">
        <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent"
          aria-hidden
        />
        <div className="container-page relative max-w-4xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs text-white/50"
          >
            <Link to="/" className="hover:text-white/80">
              Home
            </Link>
            <span>/</span>
            <Link to="/blog/" className="hover:text-white/80">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white/70 truncate max-w-[200px]">{post.title}</span>
          </nav>
          <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            {post.category}
          </span>
          <h1 className="mt-5 text-3xl font-bold leading-[1.15] text-white! text-balance md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/55">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {formatDate(post.publishDate)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {post.readingTime} min read
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{post.excerpt}</p>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <article className="lg:col-span-2 prose-article">
              {post.sections.map((section, i) => (
                <Reveal key={i}>
                  <div className="mb-10">
                    <h2 className="mb-4 text-xl font-bold md:text-2xl">{section.heading}</h2>
                    {section.paragraphs.map((para, j) => (
                      <p key={j} className="mb-4 leading-relaxed text-muted-foreground">
                        {para}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-4 space-y-2.5">
                        {section.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <ArrowRight size={15} className="mt-0.5 shrink-0 text-accent" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}

              {/* FAQs */}
              {post.faqs.length > 0 && (
                <Reveal>
                  <div className="mt-12 border-t border-border pt-10">
                    <h2 className="mb-6 text-xl font-bold md:text-2xl">
                      Frequently Asked Questions
                    </h2>
                    {post.faqs.map((faq) => (
                      <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </Reveal>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA card */}
              <Reveal delay={80}>
                <div className="rounded-xl border border-accent/30 bg-primary p-6 text-white">
                  <h3 className="font-bold text-white!">Have a Kuwait project?</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Speak to our team for expert construction advice and a free project
                    consultation.
                  </p>
                  <div className="mt-5 flex flex-col gap-2.5">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition hover:bg-white"
                    >
                      Request a Quote <ArrowRight size={14} />
                    </Link>
                    <a
                      href="tel:+96566935287"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-4 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10"
                    >
                      Call +965 6693 5287
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Related services */}
              {relatedServices.length > 0 && (
                <Reveal delay={120}>
                  <div className="rounded-xl border border-border bg-surface p-6">
                    <h3 className="font-bold">Related Services</h3>
                    <ul className="mt-4 space-y-3">
                      {relatedServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
                          >
                            <ArrowRight size={13} className="shrink-0 text-accent" />
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              {/* Back to blog */}
              <Reveal delay={150}>
                <Link
                  to="/blog/"
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  ← Back to all articles
                </Link>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
