import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BlueprintGrid } from "@/components/site/BlueprintGrid";
import { ShieldCheck, CheckCircle2, Microscope, ClipboardCheck, GraduationCap, FileCheck, HardHat } from "lucide-react";
import qualityImg from "@/assets/quality-safety.jpg";

export const Route = createFileRoute("/quality-safety")({
  head: () => ({
    meta: [
      { title: "Quality & Safety — Eastern Legend Building Construction Co. W.L.L." },
      { name: "description", content: "Quality assurance and safety standards on every Eastern Legend project: approved methods, certified materials, testing, inspections, training, and Kuwait compliance." },
      { property: "og:title", content: "Quality & Safety" },
      { property: "og:description", content: "Quality assurance and safety at every stage of construction." },
      { property: "og:url", content: "/quality-safety" },
    ],
    links: [{ rel: "canonical", href: "/quality-safety" }],
  }),
  component: QualityPage,
});

const PILLARS = [
  { icon: FileCheck, t: "Quality Assurance Process", d: "Approved methods, documented procedures, and accountability at every project phase." },
  { icon: HardHat, t: "Site Safety Monitoring", d: "Continuous monitoring, daily toolbox talks, and proactive risk management." },
  { icon: Microscope, t: "Certified Materials", d: "Sourcing of certified, compliant materials with full traceability." },
  { icon: ClipboardCheck, t: "Testing & Inspections", d: "Independent testing, structured inspections, and corrective-action workflows." },
  { icon: GraduationCap, t: "Worker Training", d: "Ongoing HSE and skill training for engineers, supervisors, and site teams." },
  { icon: ShieldCheck, t: "Kuwait Standards Compliance", d: "Full alignment with Kuwait regulations, building codes, and environmental standards." },
];

const POINTS = [
  "Approved construction methods",
  "Certified materials and testing procedures",
  "Regular inspections and quality checks",
  "Continuous on-site safety monitoring",
  "Ongoing staff and worker safety training",
  "Compliance with Kuwait regulations and standards",
];

function QualityPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quality & Safety"
        title="Quality Assurance & Safety at Every Stage"
        subtitle="A disciplined approach to QA/QC and HSE — embedded in every project from mobilization to handover."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img src={qualityImg} alt="Safety inspector on site" width={1280} height={960} loading="lazy" className="rounded-xl object-cover shadow-elevated" />
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
                  <CheckCircle2 size={18} className="mt-0.5 text-accent shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Pillars" title="How We Deliver Consistent Quality" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.t} delay={i * 60}>
                <div className="h-full rounded-xl border border-border bg-surface p-7 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <p.icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-24">
        <BlueprintGrid />
        <div className="container-page relative text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold !text-white md:text-4xl">Site management discipline you can audit.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">Documented procedures, traceable materials, and trained teams — across every active site.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
