import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BlueprintGrid } from "@/components/site/BlueprintGrid";
import {
  ShieldCheck,
  CheckCircle2,
  Microscope,
  ClipboardCheck,
  GraduationCap,
  FileCheck,
  HardHat,
  ArrowRight,
} from "lucide-react";
import qualityImg from "@/assets/quality-safety.jpg";

export const Route = createFileRoute("/quality-safety")({
  head: () => ({
    meta: [
      { title: "Quality & Safety — Eastern Legend Building Construction Co. W.L.L." },
      {
        name: "description",
        content:
          "Quality assurance and safety standards on every Eastern Legend project: approved methods, certified materials, testing, inspections, training, and Kuwait compliance.",
      },
      { property: "og:title", content: "Quality & Safety" },
      {
        property: "og:description",
        content: "Quality assurance and safety at every stage of construction.",
      },
      { property: "og:url", content: "/quality-safety" },
    ],
    links: [{ rel: "canonical", href: "/quality-safety" }],
  }),
  component: QualityPage,
});

const PILLARS = [
  {
    icon: FileCheck,
    title: "Quality Assurance Process",
    desc: "Approved methods, documented procedures, and accountability at every project phase — from pre-construction planning through to final handover.",
  },
  {
    icon: HardHat,
    title: "Site Safety Monitoring",
    desc: "Continuous monitoring, daily toolbox talks, hazard identification, and proactive risk management across all active sites.",
  },
  {
    icon: Microscope,
    title: "Certified Materials",
    desc: "Sourcing of certified, compliant materials with full traceability and documentation to meet Kuwait regulatory and client requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Testing & Inspections",
    desc: "Independent testing, structured site inspections, NCR tracking, and corrective-action workflows to maintain quality through execution.",
  },
  {
    icon: GraduationCap,
    title: "Worker Safety Training",
    desc: "Ongoing HSE and skill training for engineers, supervisors, and site teams — ensuring every person on site knows their responsibilities.",
  },
  {
    icon: ShieldCheck,
    title: "Kuwait Standards Compliance",
    desc: "Full alignment with Kuwait Ministry regulations, building codes, environmental standards, and client-specific HSE requirements.",
  },
] as const;

const POINTS = [
  "Approved construction methods and documented procedures",
  "Certified materials with full traceability",
  "Regular site inspections and quality checks",
  "Continuous on-site safety monitoring",
  "Ongoing HSE training for all site personnel",
  "Full compliance with Kuwait regulations and standards",
] as const;

function QualityPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quality & Safety"
        title="Quality Assurance & Safety at Every Stage"
        subtitle="A disciplined approach to QA/QC and HSE — embedded in every project from mobilization to handover, not applied as an afterthought."
      />

      {/* Intro image + commitment */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-xl bg-primary/5" />
              <img
                src={qualityImg}
                alt="Safety inspector on construction site"
                width={1280}
                height={960}
                loading="lazy"
                className="rounded-xl object-cover shadow-elevated"
              />
              <div className="absolute -bottom-5 -right-5 hidden rounded-xl border border-white/20 bg-primary p-5 text-white shadow-elevated md:block">
                <div className="font-display text-2xl font-bold text-white! leading-none">100%</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                  Site Compliance Focus
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              align="left"
              eyebrow="Our Commitment"
              title="Quality and safety are non-negotiable."
              subtitle="Eastern Legend is fully committed to maintaining high standards of quality and safety in every project. Our process includes approved construction methods, certified materials, proper testing procedures, regular inspections, continuous site safety monitoring, staff training, and full compliance with Kuwait regulations and standards."
            />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="absolute inset-x-0 h-px bg-border" />
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Quality Pillars"
              title="How We Deliver Consistent Quality"
              subtitle="Six integrated commitments that run through every Eastern Legend project — regardless of scope, sector, or client."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="group h-full rounded-xl border border-border bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <p.icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <BlueprintGrid />
        <div className="container-page relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Site Management Discipline
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-bold text-white! md:text-4xl">
              Quality you can audit, safety you can verify.
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              Documented procedures, traceable materials, trained teams, and structured inspections
              — across every active Eastern Legend site.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-white"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "QA/QC", l: "Quality Process" },
              { v: "HSE", l: "Safety Framework" },
              { v: "100%", l: "Certified Materials" },
              { v: "Daily", l: "Site Inspections" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur"
              >
                <div className="font-display text-2xl font-bold text-accent">{s.v}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/55">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
