import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  HardHat,
  Building2,
  Wrench,
  Hammer,
  PaintBucket,
  Container,
  Truck,
  ClipboardCheck,
  CheckCircle2,
  Award,
  Users,
  Briefcase,
  ScrollText,
  Compass,
  Settings2,
  Mail,
  Phone,
  MapPin,
  Smartphone,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { BlueprintGrid } from "@/components/site/BlueprintGrid";
import { ContactForm } from "@/components/site/ContactForm";
import heroImg from "@/assets/hero-skyline.jpg";
import aboutImg from "@/assets/engineers-onsite.jpg";
import qualityImg from "@/assets/quality-safety.jpg";
import whyImg from "@/assets/why-choose.jpg";
import ctaImg from "@/assets/cta-band.jpg";
import projRes from "@/assets/proj-residential.jpg";
import projCom from "@/assets/proj-commercial.jpg";
import projInd from "@/assets/proj-industrial.jpg";
import projMep from "@/assets/proj-mep.jpg";
import projFit from "@/assets/proj-fitout.jpg";
import projSite from "@/assets/proj-site.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eastern Legend Building Construction Co. W.L.L. | Construction & Contracting Company in Kuwait" },
      { name: "description", content: "Kuwait-based construction and contracting company providing building construction, MEP contracting, fit-out, blasting and painting, site office facilities, rental services, project management, and technical consulting." },
      { property: "og:title", content: "Eastern Legend Building Construction Co. W.L.L." },
      { property: "og:description", content: "End-to-end construction, contracting, MEP and fit-out solutions across Kuwait." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const CORE_SERVICES = [
  { icon: HardHat, title: "General Contracting", desc: "Complete project planning, execution, site preparation, civil works, structural construction, subcontractor coordination, quality control, safety compliance, and timely delivery." },
  { icon: Building2, title: "Building Contracting", desc: "Civil construction solutions for residential, commercial, high-rise, multi-storey, industrial, warehouse, hospitality, and community projects." },
  { icon: Wrench, title: "MEP Contracting", desc: "Mechanical, electrical, and plumbing solutions including HVAC, electrical power, lighting, low-current systems, plumbing, drainage, water supply, testing, commissioning, and maintenance." },
  { icon: Hammer, title: "MEP Fit-out & Interior Design", desc: "Specialized MEP fit-out solutions for commercial and residential interiors, offices, retail spaces, system upgrades, technical planning, and value engineering." },
  { icon: PaintBucket, title: "Blasting & Painting", desc: "Surface preparation, abrasive blasting, protective coatings, structural steel painting, equipment painting, corrosion protection, and surface treatment." },
  { icon: Container, title: "Site Office Facilities", desc: "Portable site office cabins, workspace setup, electrical and utility connections, furniture, storage, installation, maintenance, and dismantling services." },
  { icon: Truck, title: "Rental Services", desc: "Reliable equipment, machinery, portable cabins, temporary facilities, site support equipment, utility units, and operational support services." },
];

const COMMERCIAL = [
  { icon: ClipboardCheck, title: "Project Management", desc: "Expert coordination from start to finish, ensuring timely completion, budget control, and quality execution." },
  { icon: Settings2, title: "Renovations & Additions", desc: "Structural modifications, interior and exterior upgrades, and space planning aligned with client requirements." },
  { icon: Compass, title: "Technical Consulting", desc: "Professional consulting to support informed decisions, compliance, efficiency, and successful project execution." },
  { icon: ScrollText, title: "Pre-Construction Services", desc: "Feasibility studies, site analysis, budgeting, scheduling, and value engineering before construction begins." },
  { icon: ShieldCheck, title: "Safety & Compliance Assistance", desc: "Support for local building codes, safety regulations, and environmental standards throughout the construction process." },
  { icon: Briefcase, title: "Custom Design-Build Services", desc: "Turnkey design and construction solutions under one contract for streamlined project delivery." },
];

const CLIENTS = [
  "Kuwait Oil Company", "ACICO Group", "Boubyan Gases Manufacturing Co.",
  "Dar Al Saha Polyclinic", "Kuwait Catalyst Company", "Huawei",
  "Wajda", "STC", "NBK", "FDH JV", "Alshaya Group", "Alghanim Industries",
];

const PROJECTS = [
  { img: projRes, title: "Residential Construction", desc: "Multi-storey residential buildings, villas, and community developments delivered with precision." },
  { img: projCom, title: "Commercial Buildings", desc: "Office towers, retail complexes, and mixed-use developments built to commercial standards." },
  { img: projInd, title: "Industrial Facilities", desc: "Warehouses, manufacturing units, and industrial complexes engineered for performance." },
  { img: projMep, title: "MEP Installations", desc: "End-to-end mechanical, electrical, and plumbing installations across project types." },
  { img: projFit, title: "Fit-out & Interior Works", desc: "Premium interior fit-out for offices, retail spaces, and hospitality environments." },
  { img: projSite, title: "Site Facilities & Support", desc: "Portable cabins, site utilities, and temporary infrastructure for active projects." },
];

const WHY = [
  "End-to-end construction solutions",
  "Strong project coordination",
  "Skilled manpower and engineering expertise",
  "Safety-first site operations",
  "Reliable timelines and transparent execution",
  "Quality-focused delivery",
  "Kuwait market experience",
  "Flexible solutions for projects of varying scale",
];

const QUALITY_POINTS = [
  "Approved construction methods",
  "Certified materials and testing procedures",
  "Regular inspections and quality checks",
  "Continuous on-site safety monitoring",
  "Ongoing staff and worker safety training",
  "Compliance with Kuwait regulations and standards",
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <img
          src={heroImg}
          alt="Kuwait skyline construction"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 gradient-hero" />
        <BlueprintGrid />
        <div className="container-page relative flex min-h-[100svh] flex-col justify-center pt-32 pb-16 text-white">
          <div className="max-w-4xl animate-[fade-in_0.8s_ease-out]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Kuwait • Building Construction & Contracting
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] !text-white text-balance md:text-6xl lg:text-7xl">
              Building Reliable Structures<br/>
              <span className="text-accent">Across Kuwait</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Eastern Legend Building Construction Co. W.L.L. delivers end-to-end
              construction, contracting, MEP, fit-out, and project management
              solutions with a strong commitment to quality, safety, and client satisfaction.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-elevated transition-all hover:bg-white hover:-translate-y-0.5"
              >
                Request a Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
              {[
                { icon: MapPin, label: "Kuwait-Based Contractor" },
                { icon: CheckCircle2, label: "End-to-End Project Delivery" },
                { icon: ShieldCheck, label: "Quality & Safety Focused" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-3 rounded-md border border-white/15 bg-white/5 px-4 py-3 backdrop-blur">
                  <b.icon size={18} className="text-accent" />
                  <span className="text-xs font-medium text-white/90 md:text-sm">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-xl bg-accent/15" />
              <img
                src={aboutImg}
                alt="Engineers on construction site"
                width={1280}
                height={960}
                loading="lazy"
                className="rounded-xl object-cover shadow-elevated"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-primary p-6 text-white shadow-elevated md:block">
                <div className="text-3xl font-bold !text-white">12+</div>
                <div className="text-xs uppercase tracking-wider text-white/70">Major Clients Served</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="About Eastern Legend"
              title="From Planning to Completion"
              subtitle="Eastern Legend Building Construction Co. W.L.L. is a Kuwait-based contracting company focused on building construction and integrated technical services. Backed by technical expertise, disciplined project management, and skilled manpower, we deliver safe, compliant, and high-quality outcomes across projects of varying scale and complexity."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Experienced engineering teams",
                "Structured site operations",
                "Transparent execution",
                "Reliable project lifecycle management",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
                More about us <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="relative bg-muted/40 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Core Services"
              title="Engineering Capabilities Across the Project Lifecycle"
              subtitle="Integrated construction, contracting, and technical services delivered with precision and accountability."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <article className="group h-full rounded-xl border border-border bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <s.icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-accent">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL & TECHNICAL */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Commercial & Technical Services"
              title="Specialist Support Beyond Construction"
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {COMMERCIAL.map((c) => (
              <div key={c.title} className="group bg-surface p-7 transition-colors hover:bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent">
                    <c.icon size={18} />
                  </div>
                  <h3 className="text-base font-semibold">{c.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & SAFETY */}
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <img src={qualityImg} alt="" width={1280} height={960} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-dark/80" aria-hidden />
        <BlueprintGrid />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              light
              eyebrow="Quality & Safety"
              title="Quality Assurance & Safety at Every Stage"
              subtitle="Eastern Legend is fully committed to maintaining high standards of quality and safety in every project. Our process includes approved construction methods, certified materials, proper testing procedures, regular inspections, continuous site safety monitoring, staff training, and full compliance with Kuwait regulations and standards."
            />
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {QUALITY_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/5 p-4 backdrop-blur">
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm leading-snug text-white/90">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our Clients"
              title="Trusted by Leading Organizations"
              subtitle="We are proud to have worked with leading organizations across Kuwait."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
            {CLIENTS.map((c) => (
              <div key={c} className="group flex h-24 items-center justify-center bg-surface px-4 text-center transition-colors hover:bg-muted">
                <span className="font-display text-sm font-semibold tracking-tight text-muted-foreground transition-colors group-hover:text-primary md:text-base">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Project Categories"
              title="Projects Built on Trust, Planning, and Execution"
              subtitle="A snapshot of the project types we deliver across Kuwait's commercial, residential, industrial, and technical markets."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <article className="group overflow-hidden rounded-xl bg-surface shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">Category</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Why Eastern Legend"
              title="Why Clients Choose Eastern Legend"
              subtitle="A disciplined approach, technical depth, and a Kuwait-first mindset — built around the outcomes that matter to project owners."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {WHY.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm">
                  <Award size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-foreground">{w}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-xl">
              <img src={whyImg} alt="High-rise construction" width={1280} height={1280} loading="lazy" className="aspect-square w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-6 text-white">
                <div className="font-display text-xl font-semibold !text-white">Built for Kuwait's market</div>
                <p className="mt-1 text-sm text-white/75">Compliant. Coordinated. Completed on time.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden">
        <img src={ctaImg} alt="" width={1920} height={800} loading="lazy" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
        <div className="absolute inset-0 bg-primary-dark/85" />
        <BlueprintGrid />
        <div className="container-page relative py-20 text-center text-white md:py-28">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold !text-white text-balance md:text-5xl">
            Planning a Construction Project in Kuwait?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 md:text-lg">
            Partner with Eastern Legend for reliable construction, contracting, MEP, fit-out, and project support services.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-elevated transition hover:bg-white">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Get In Touch"
              title="Tell Us About Your Project"
              subtitle="Send us a brief about your project and our team will respond with the right scope, approach, and next steps."
            />
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-accent shrink-0" />
                <span>Block 11, Mekka Street, Building 6659, Floor 1, Office No. 4, Fahaheel, Kuwait.</span>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone size={18} className="text-accent" />
                <a href="tel:+96566935287" className="hover:text-accent">+965 6693 5287</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a href="tel:+96565646413" className="hover:text-accent">+965 6564 6413</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:info@easternlegendkw.com" className="hover:text-accent">info@easternlegendkw.com</a>
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Eastern Legend office location"
                src="https://www.google.com/maps?q=Fahaheel,+Kuwait&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-xl border border-border bg-surface p-6 shadow-card md:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
