import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { BlueprintGrid } from "@/components/site/BlueprintGrid";
import {
  HardHat,
  Building2,
  Wrench,
  Hammer,
  PaintBucket,
  Container,
  Truck,
  ClipboardCheck,
  Settings2,
  Compass,
  ScrollText,
  ShieldCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/constants";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Construction & Contracting Services in Kuwait | Eastern Legend" },
      {
        name: "description",
        content:
          "General contracting, building contracting, MEP contracting, fit-out, blasting & painting, site office facilities, rental services, and technical consulting in Kuwait.",
      },
      { property: "og:title", content: "Construction & Contracting Services — Eastern Legend" },
      {
        property: "og:description",
        content:
          "End-to-end construction and technical contracting services across Kuwait. One company, full accountability.",
      },
      { property: "og:url", content: `${SITE_URL}/services` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateWebPageSchema({
            title: "Construction & Contracting Services in Kuwait",
            description:
              "General contracting, building contracting, MEP, fit-out, blasting & painting, site facilities, and rental services in Kuwait.",
            url: `${SITE_URL}/services`,
          }),
        ),
      },
    ],
  }),
  component: ServicesPage,
});

const CORE = [
  {
    num: "01",
    icon: HardHat,
    slug: "general-contracting-kuwait",
    title: "General Contracting",
    desc: "Complete project planning, execution, site preparation, civil works, structural construction, subcontractor coordination, quality control, safety compliance, and timely delivery. We manage the full scope from mobilization to handover under a single accountable contract.",
    highlights: [
      "Civil & structural works",
      "Subcontractor management",
      "QA/QC compliance",
      "Safety supervision",
    ],
  },
  {
    num: "02",
    icon: Building2,
    slug: "building-contracting-kuwait",
    title: "Building Contracting",
    desc: "Civil construction solutions for residential, commercial, high-rise, multi-storey, industrial, warehouse, hospitality, and community projects. Our experienced teams bring structured execution and engineering discipline to every build.",
    highlights: [
      "Residential & commercial",
      "High-rise & multi-storey",
      "Industrial & warehouse",
      "Hospitality projects",
    ],
  },
  {
    num: "03",
    icon: Wrench,
    slug: "mep-contracting-kuwait",
    title: "MEP Contracting",
    desc: "Mechanical, electrical, and plumbing solutions including HVAC, electrical power, lighting, low-current systems, plumbing, drainage, water supply, testing, commissioning, and maintenance. Delivered by qualified MEP engineers and certified technicians.",
    highlights: [
      "HVAC & mechanical",
      "Electrical power & lighting",
      "Plumbing & drainage",
      "Testing & commissioning",
    ],
  },
  {
    num: "04",
    icon: Hammer,
    slug: "mep-fitout-interior-design-kuwait",
    title: "MEP Fit-out & Interior Design",
    desc: "Specialized MEP fit-out solutions for commercial and residential interiors, offices, retail spaces, system upgrades, technical planning, and value engineering. We coordinate design, procurement, and installation under one responsible team.",
    highlights: [
      "Office & retail fit-out",
      "System upgrades",
      "Value engineering",
      "Technical coordination",
    ],
  },
  {
    num: "05",
    icon: PaintBucket,
    slug: "blasting-painting-kuwait",
    title: "Blasting & Painting",
    desc: "Surface preparation, abrasive blasting, protective coatings, structural steel painting, equipment painting, corrosion protection, and surface treatment. All work is carried out to international standards with certified materials and qualified applicators.",
    highlights: [
      "Abrasive blasting",
      "Protective coatings",
      "Structural steel painting",
      "Corrosion protection",
    ],
  },
  {
    num: "06",
    icon: Container,
    slug: "site-office-facilities-kuwait",
    title: "Site Office Facilities",
    desc: "Portable site office cabins, workspace setup, electrical and utility connections, furniture, storage, installation, maintenance, and dismantling services. Designed for active construction sites requiring rapid, functional, and compliant temporary facilities.",
    highlights: [
      "Portable site cabins",
      "Utility connections",
      "Furniture & fit-out",
      "Maintenance & dismantling",
    ],
  },
  {
    num: "07",
    icon: Truck,
    slug: "rental-services-kuwait",
    title: "Rental Services",
    desc: "Reliable equipment, machinery, portable cabins, temporary facilities, site support equipment, utility units, and operational support services. Flexible rental packages tailored to the timeline and requirements of each project.",
    highlights: [
      "Equipment & machinery",
      "Portable cabins",
      "Temporary facilities",
      "Operational support",
    ],
  },
] as const;

const COMMERCIAL = [
  {
    icon: ClipboardCheck,
    slug: "project-management-kuwait",
    title: "Project Management",
    desc: "Expert coordination from start to finish — scope management, scheduling, budget control, procurement, and quality execution. Our project managers maintain full visibility and accountability throughout the project lifecycle.",
  },
  {
    icon: Settings2,
    slug: "renovations-additions-kuwait",
    title: "Renovations & Additions",
    desc: "Structural modifications, interior and exterior upgrades, building extensions, and space planning aligned with client requirements, regulatory compliance, and existing structure constraints.",
  },
  {
    icon: Compass,
    slug: "technical-consulting-kuwait",
    title: "Technical Consulting",
    desc: "Professional consulting to support informed project decisions, regulatory compliance, efficiency improvements, and successful execution. Advisory services for owners, developers, and project managers.",
  },
  {
    icon: ScrollText,
    slug: "pre-construction-services-kuwait",
    title: "Pre-Construction Services",
    desc: "Feasibility studies, site analysis, budget estimation, scheduling, value engineering, and procurement planning before construction begins — reducing risk and improving project predictability.",
  },
  {
    icon: ShieldCheck,
    slug: "safety-compliance-kuwait",
    title: "Safety & Compliance",
    desc: "Support for local building codes, safety regulations, HSE frameworks, and environmental standards throughout the construction process. Keeping your project compliant and your teams protected.",
  },
  {
    icon: Briefcase,
    slug: "design-build-services-kuwait",
    title: "Custom Design-Build Services",
    desc: "Turnkey design and construction solutions under one contract for streamlined, accountable project delivery. Ideal for clients seeking a single point of responsibility from brief to build.",
  },
] as const;

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Construction & Technical Services for Kuwait"
        subtitle="From civil contracting and MEP works to fit-out, blasting & painting, and site facility support — a single accountable partner for the full project lifecycle."
      />

      {/* Core services */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                Core Services
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Seven Integrated Construction Capabilities
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each service is delivered by dedicated teams with engineering oversight, site
              supervision, and quality accountability from start to finish.
            </p>
          </div>

          <div className="space-y-16">
            {CORE.map((s, i) => (
              <Reveal key={s.title}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-12 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Visual panel */}
                  <div className="lg:col-span-5">
                    <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-primary">
                      <div className="absolute inset-0 blueprint-grid opacity-40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <s.icon size={110} className="text-white/80" strokeWidth={1.1} />
                      </div>
                      <div className="absolute left-5 top-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        {s.num}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="lg:col-span-7">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                      Core Service
                    </div>
                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">{s.title}</h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{s.desc}</p>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-4">
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
                      >
                        Learn more <ArrowRight size={16} />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
                      >
                        Get a quote
                      </Link>
                    </div>
                  </div>
                </article>
                {i < CORE.length - 1 && <hr className="mt-16 border-border" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial & Technical */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="absolute inset-x-0 h-px bg-border" />
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-secondary" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                  Commercial & Technical
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Specialist Support Beyond Construction
              </h2>
              <p className="mt-4 text-muted-foreground">
                Advisory and management services that complement our core construction capabilities
                — giving clients a single point of accountability across the project lifecycle.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMMERCIAL.map((c, i) => (
              <Reveal key={c.title} delay={i * 50}>
                <Link
                  to="/services/$slug"
                  params={{ slug: c.slug }}
                  className="group block h-full rounded-xl border border-border bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <c.icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-24">
        <BlueprintGrid />
        <div className="container-page relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Get Started
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-bold text-white! md:text-4xl">
              Need a service not listed here?
            </h2>
            <p className="mt-4 max-w-2xl text-white/75">
              Our team handles complex, multi-discipline scopes. Share your project brief and we
              will outline the right approach, team, and delivery structure.
            </p>
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
                Call +965 6693 5287
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
