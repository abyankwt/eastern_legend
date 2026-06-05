import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  HardHat, Building2, Wrench, Hammer, PaintBucket, Container, Truck,
  ClipboardCheck, Settings2, Compass, ScrollText, ShieldCheck, Briefcase, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Eastern Legend Building Construction Co. W.L.L." },
      { name: "description", content: "General contracting, building contracting, MEP, fit-out, blasting & painting, site office facilities, rental services, and technical consulting in Kuwait." },
      { property: "og:title", content: "Construction & Contracting Services" },
      { property: "og:description", content: "End-to-end construction and technical services across Kuwait." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const CORE = [
  { icon: HardHat, t: "General Contracting", d: "Complete project planning, execution, site preparation, civil works, structural construction, subcontractor coordination, quality control, safety compliance, and timely delivery." },
  { icon: Building2, t: "Building Contracting", d: "Civil construction solutions for residential, commercial, high-rise, multi-storey, industrial, warehouse, hospitality, and community projects." },
  { icon: Wrench, t: "MEP Contracting", d: "Mechanical, electrical, and plumbing solutions including HVAC, electrical power, lighting, low-current systems, plumbing, drainage, water supply, testing, commissioning, and maintenance." },
  { icon: Hammer, t: "MEP Fit-out & Interior Design", d: "Specialized MEP fit-out solutions for commercial and residential interiors, offices, retail spaces, system upgrades, technical planning, and value engineering." },
  { icon: PaintBucket, t: "Blasting & Painting", d: "Surface preparation, abrasive blasting, protective coatings, structural steel painting, equipment painting, corrosion protection, and surface treatment." },
  { icon: Container, t: "Site Office Facilities", d: "Portable site office cabins, workspace setup, electrical and utility connections, furniture, storage, installation, maintenance, and dismantling services." },
  { icon: Truck, t: "Rental Services", d: "Reliable equipment, machinery, portable cabins, temporary facilities, site support equipment, utility units, and operational support services." },
];

const COMMERCIAL = [
  { icon: ClipboardCheck, t: "Project Management", d: "Expert coordination from start to finish, ensuring timely completion, budget control, and quality execution." },
  { icon: Settings2, t: "Renovations & Additions", d: "Structural modifications, interior and exterior upgrades, and space planning aligned with client requirements." },
  { icon: Compass, t: "Technical Consulting", d: "Professional consulting to support informed decisions, compliance, efficiency, and successful project execution." },
  { icon: ScrollText, t: "Pre-Construction Services", d: "Feasibility studies, site analysis, budgeting, scheduling, and value engineering before construction begins." },
  { icon: ShieldCheck, t: "Safety & Compliance Assistance", d: "Support for local building codes, safety regulations, and environmental standards throughout the construction process." },
  { icon: Briefcase, t: "Custom Design-Build Services", d: "Turnkey design and construction solutions under one contract for streamlined project delivery." },
];

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
        <div className="container-page space-y-16">
          {CORE.map((s, i) => (
            <Reveal key={s.t}>
              <article className={`grid items-center gap-10 lg:grid-cols-12 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-primary">
                    <div className="absolute inset-0 blueprint-grid opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <s.icon size={120} className="text-white/85" strokeWidth={1.2} />
                    </div>
                    <div className="absolute top-5 left-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      0{i + 1}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Core Service</div>
                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">{s.t}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.d}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
                    Discuss this service <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Commercial */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Commercial & Technical</div>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Commercial & Technical Services</h2>
              <p className="mt-4 text-muted-foreground">Specialist support that complements our core construction capabilities.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMMERCIAL.map((c, i) => (
              <Reveal key={c.t} delay={i * 50}>
                <div className="h-full rounded-xl border border-border bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/15 text-accent">
                    <c.icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{c.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
