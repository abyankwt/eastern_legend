import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Eastern Legend Building Construction Co. W.L.L." },
      {
        name: "description",
        content:
          "Trusted by leading organizations across Kuwait — including Kuwait Oil Company, ACICO Group, NBK, STC, Huawei, Alshaya Group, Alghanim Industries, and more.",
      },
      { property: "og:title", content: "Our Clients" },
      {
        property: "og:description",
        content: "Leading organizations across Kuwait that trust Eastern Legend.",
      },
      { property: "og:url", content: "/clients" },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
  component: ClientsPage,
});

const CLIENTS = [
  {
    name: "Kuwait Oil Company",
    abbr: "KOC",
    industry: "Oil & Gas",
    logo: "/client-logos/koc.png",
    desc: "Construction and site facility services in support of KOC operations across Kuwait.",
  },
  {
    name: "ACICO Group",
    abbr: "ACICO",
    industry: "Construction",
    logo: "/client-logos/acico.png",
    desc: "Building contracting and civil construction services for residential and commercial developments.",
  },
  {
    name: "Boubyan Gases Manufacturing Co.",
    abbr: "BGMC",
    industry: "Industrial",
    logo: "/client-logos/boubyan.png",
    desc: "Industrial construction and MEP works for gas manufacturing infrastructure.",
  },
  {
    name: "Dar Al Saha Polyclinic",
    abbr: "DAS",
    industry: "Healthcare",
    logo: "/client-logos/dar-al-saha.png",
    desc: "Fit-out and interior construction services for healthcare facility environments.",
  },
  {
    name: "Kuwait Catalyst Company",
    abbr: "KCC",
    industry: "Petrochemical",
    logo: "/client-logos/kcc.png",
    desc: "Specialized construction and site support for petrochemical plant operations.",
  },
  {
    name: "Huawei",
    abbr: "HW",
    industry: "Technology",
    logo: "/client-logos/huawei.png",
    desc: "Site office facilities and construction support for technology infrastructure projects.",
  },
  {
    name: "Wajda Group",
    abbr: "WAJDA",
    industry: "Real Estate",
    logo: "/client-logos/wajda.png",
    desc: "Residential and commercial building contracting for real estate developments.",
  },
  {
    name: "STC",
    abbr: "STC",
    industry: "Telecom",
    logo: "/client-logos/stc.png",
    desc: "Site facility setup and construction support for telecommunications infrastructure.",
  },
  {
    name: "National Bank of Kuwait",
    abbr: "NBK",
    industry: "Banking",
    logo: "/client-logos/nbk.png",
    desc: "Fit-out and interior construction services for corporate banking environments.",
  },
  {
    name: "FDH JV",
    abbr: "FDH",
    industry: "Joint Venture",
    logo: "/client-logos/fdh-jv.png",
    desc: "Collaborative construction services for joint venture project scopes across Kuwait.",
  },
  {
    name: "Alshaya Group",
    abbr: "ASG",
    industry: "Retail",
    logo: "/client-logos/alshaya.png",
    desc: "Interior fit-out and construction services for retail brand environments across Kuwait.",
  },
  {
    name: "Alghanim Industries",
    abbr: "AGI",
    industry: "Conglomerate",
    logo: "/client-logos/alghanim.png",
    desc: "Industrial, commercial, and facility construction support across the Alghanim portfolio.",
  },
] as const;

const SECTORS = [
  "Oil & Gas",
  "Construction",
  "Industrial",
  "Healthcare",
  "Petrochemical",
  "Technology",
  "Real Estate",
  "Telecom",
  "Banking",
  "Retail",
] as const;

function LogoCard({
  name,
  abbr,
  industry,
  logo,
}: {
  name: string;
  abbr: string;
  industry: string;
  logo: string;
}) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
      <div className="flex h-24 w-full items-center justify-center">
        {imgOk ? (
          <img
            src={logo}
            alt={name}
            className="max-h-20 max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="font-display text-2xl font-bold text-primary">{abbr}</span>
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="text-[11px] font-semibold leading-snug text-foreground/70">{name}</p>
        <span className="mt-1.5 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent">
          {industry}
        </span>
      </div>
    </div>
  );
}

function ClientsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Clients"
        title="Trusted by Leading Organizations in Kuwait"
        subtitle="We are proud to have worked with major private and public sector organizations across Kuwait, supporting projects with reliable construction, technical, and operational services."
      />

      {/* Sector tags */}
      <div className="border-b border-border bg-surface">
        <div className="container-page flex flex-wrap items-center gap-2 py-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Sectors served:
          </span>
          {SECTORS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Logo grid */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-secondary" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                  Our Clients
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Organizations That Trust Eastern Legend
              </h2>
              <p className="mt-4 text-muted-foreground">
                A portfolio of major clients spanning oil & gas, petrochemical, industrial, banking,
                telecom, retail, and real estate sectors across Kuwait.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {CLIENTS.map((c, i) => (
              <Reveal key={c.name} delay={i * 35}>
                <LogoCard name={c.name} abbr={c.abbr} industry={c.industry} logo={c.logo} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detail descriptions */}
      <section className="bg-muted/40 py-20 md:py-24">
        <div className="absolute inset-x-0 h-px bg-border" />
        <div className="container-page">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-secondary" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                  Scope of Work
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                Services Delivered Across Our Client Portfolio
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CLIENTS.map((c, i) => (
              <Reveal key={c.name} delay={i * 30}>
                <div className="flex gap-4 rounded-xl border border-border bg-surface p-5 shadow-card">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-center">
                    <span className="font-display text-xs font-bold text-primary">{c.abbr}</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold leading-tight text-foreground">{c.name}</span>
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent">
                        {c.industry}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why we're trusted */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                Why We're Trusted
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Consistent delivery builds long-term relationships.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our clients return because we deliver on our commitments — on time, to quality, and
              with clear communication throughout. From Kuwait Oil Company to Alshaya Group, our
              track record spans oil & gas, industrial, healthcare, retail, and commercial sectors.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Single-point accountability from planning to handover",
                "Experienced teams across all project types and sectors",
                "Quality and safety standards maintained on every site",
                "Transparent reporting and proactive communication",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
              <div className="font-display text-5xl font-bold text-primary">12+</div>
              <div className="mt-2 text-lg font-semibold">Major Organizations Served</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Across oil & gas, industrial, healthcare, retail, banking, telecom, and real estate
                sectors throughout Kuwait.
              </p>
              <div className="mt-8 border-t border-border pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Work with us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
