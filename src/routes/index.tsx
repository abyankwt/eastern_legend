import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
import { ContactForm } from "@/components/site/ContactForm";
import { BlueprintGrid } from "@/components/site/BlueprintGrid";
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
      {
        title:
          "Eastern Legend Building Construction Co. W.L.L. | Construction & Contracting Company in Kuwait",
      },
      {
        name: "description",
        content:
          "Kuwait-based construction and contracting company providing building construction, MEP contracting, fit-out, blasting and painting, site office facilities, rental services, project management, and technical consulting.",
      },
      { property: "og:title", content: "Eastern Legend Building Construction Co. W.L.L." },
      {
        property: "og:description",
        content: "End-to-end construction, contracting, MEP and fit-out solutions across Kuwait.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

// ── Data ──────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "12+", label: "Major Clients Served" },
  { value: "7", label: "Core Service Lines" },
  { value: "End-to-End", label: "Project Delivery" },
  { value: "Fahaheel", label: "Kuwait Operations" },
] as const;

const CORE_SERVICES = [
  {
    num: "01",
    icon: HardHat,
    title: "General Contracting",
    desc: "Complete project planning, execution, site preparation, civil works, structural construction, subcontractor coordination, quality control, safety compliance, and timely delivery.",
  },
  {
    num: "02",
    icon: Building2,
    title: "Building Contracting",
    desc: "Civil construction solutions for residential, commercial, high-rise, multi-storey, industrial, warehouse, hospitality, and community projects.",
  },
  {
    num: "03",
    icon: Wrench,
    title: "MEP Contracting",
    desc: "Mechanical, electrical, and plumbing solutions including HVAC, electrical power, lighting, low-current systems, plumbing, drainage, water supply, testing, commissioning, and maintenance.",
  },
  {
    num: "04",
    icon: Hammer,
    title: "MEP Fit-out & Interior Design",
    desc: "Specialized MEP fit-out solutions for commercial and residential interiors, offices, retail spaces, system upgrades, technical planning, and value engineering.",
  },
  {
    num: "05",
    icon: PaintBucket,
    title: "Blasting & Painting",
    desc: "Surface preparation, abrasive blasting, protective coatings, structural steel painting, equipment painting, corrosion protection, and surface treatment.",
  },
  {
    num: "06",
    icon: Container,
    title: "Site Office Facilities",
    desc: "Portable site office cabins, workspace setup, electrical and utility connections, furniture, storage, installation, maintenance, and dismantling services.",
  },
  {
    num: "07",
    icon: Truck,
    title: "Rental Services",
    desc: "Reliable equipment, machinery, portable cabins, temporary facilities, site support equipment, utility units, and operational support services.",
  },
] as const;

const COMMERCIAL = [
  {
    icon: ClipboardCheck,
    title: "Project Management",
    desc: "Expert coordination from start to finish, ensuring timely completion, budget control, and quality execution.",
  },
  {
    icon: Settings2,
    title: "Renovations & Additions",
    desc: "Structural modifications, interior and exterior upgrades, and space planning aligned with client requirements.",
  },
  {
    icon: Compass,
    title: "Technical Consulting",
    desc: "Professional consulting to support informed decisions, compliance, efficiency, and successful project execution.",
  },
  {
    icon: ScrollText,
    title: "Pre-Construction Services",
    desc: "Feasibility studies, site analysis, budgeting, scheduling, and value engineering before construction begins.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance Assistance",
    desc: "Support for local building codes, safety regulations, and environmental standards throughout the construction process.",
  },
  {
    icon: Briefcase,
    title: "Custom Design-Build Services",
    desc: "Turnkey design and construction solutions under one contract for streamlined project delivery.",
  },
] as const;

const CLIENTS = [
  { name: "Kuwait Oil Company", abbr: "KOC", industry: "Oil & Gas", logo: "/client-logos/koc.png" },
  { name: "ACICO Group", abbr: "ACICO", industry: "Construction", logo: "/client-logos/acico.png" },
  {
    name: "Boubyan Gases Manufacturing Co.",
    abbr: "BGMC",
    industry: "Industrial",
    logo: "/client-logos/boubyan.png",
  },
  {
    name: "Dar Al Saha Polyclinic",
    abbr: "DAS",
    industry: "Healthcare",
    logo: "/client-logos/dar-al-saha.png",
  },
  {
    name: "Kuwait Catalyst Company",
    abbr: "KCC",
    industry: "Petrochemical",
    logo: "/client-logos/kcc.png",
  },
  { name: "Huawei", abbr: "HW", industry: "Technology", logo: "/client-logos/huawei.png" },
  { name: "Wajda Group", abbr: "WAJDA", industry: "Real Estate", logo: "/client-logos/wajda.png" },
  { name: "STC", abbr: "STC", industry: "Telecom", logo: "/client-logos/stc.png" },
  { name: "NBK", abbr: "NBK", industry: "Banking", logo: "/client-logos/nbk.png" },
  { name: "FDH JV", abbr: "FDH", industry: "Joint Venture", logo: "/client-logos/fdh-jv.png" },
  { name: "Alshaya Group", abbr: "ASG", industry: "Retail", logo: "/client-logos/alshaya.png" },
  {
    name: "Alghanim Industries",
    abbr: "AGI",
    industry: "Conglomerate",
    logo: "/client-logos/alghanim.png",
  },
] as const;

const PROJECTS = [
  {
    img: projRes,
    title: "Residential Construction",
    cat: "Residential",
    desc: "Multi-storey residential buildings, villas, and community developments delivered with precision.",
  },
  {
    img: projCom,
    title: "Commercial Buildings",
    cat: "Commercial",
    desc: "Office towers, retail complexes, and mixed-use developments built to commercial standards.",
  },
  {
    img: projInd,
    title: "Industrial Facilities",
    cat: "Industrial",
    desc: "Warehouses, manufacturing units, and industrial complexes engineered for performance.",
  },
  {
    img: projMep,
    title: "MEP Installations",
    cat: "MEP",
    desc: "End-to-end mechanical, electrical, and plumbing installations across project types.",
  },
  {
    img: projFit,
    title: "Fit-out & Interior Works",
    cat: "Fit-out",
    desc: "Premium interior fit-out for offices, retail spaces, and hospitality environments.",
  },
  {
    img: projSite,
    title: "Site Facilities & Support",
    cat: "Site Facilities",
    desc: "Portable cabins, site utilities, and temporary infrastructure for active projects.",
  },
] as const;

const WHY = [
  "End-to-end construction solutions under one roof",
  "Strong project coordination and schedule control",
  "Skilled engineering and site management teams",
  "Safety-first site operations and HSE compliance",
  "Reliable timelines and transparent communication",
  "Quality-focused delivery from mobilization to handover",
  "Deep Kuwait and GCC market experience",
  "Flexible solutions for projects of any scale",
] as const;

const QUALITY_POINTS = [
  "Approved construction methods and procedures",
  "Certified materials and documented testing",
  "Regular site inspections and quality checks",
  "Continuous on-site safety monitoring",
  "Ongoing HSE training for all site personnel",
  "Full compliance with Kuwait regulations and standards",
] as const;

function WaIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.16c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.15-.47-.27z" />
    </svg>
  );
}

function LogoMarquee() {
  return (
    <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-primary-dark/70 py-5 backdrop-blur-md">
      <div className="flex items-center gap-0">
        {/* Label */}
        <div className="hidden shrink-0 items-center gap-3 px-8 md:flex">
          <span className="h-px w-8 bg-accent" />
          <p className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.28em] text-white/45">
            Trusted by
          </p>
          <div className="h-6 w-px bg-white/15" />
        </div>

        {/* Scrolling track with CSS mask fade on both edges */}
        <div
          className="min-w-0 flex-1 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee items-center gap-6 hover:[animation-play-state:paused]">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <MarqueeItem key={i} name={c.name} abbr={c.abbr} logo={c.logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeItem({ name, abbr, logo }: { name: string; abbr: string; logo: string }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <div className="flex h-14 w-36 items-center justify-center rounded-xl border border-white/10 bg-white px-4 py-2 shadow-lg transition-transform duration-300 hover:scale-105">
        {imgOk ? (
          <img
            src={logo}
            alt={name}
            className="max-h-10 max-w-full object-contain"
            onError={() => setImgOk(false)}
          />
        ) : (
          <span className="text-xs font-bold text-primary">{abbr}</span>
        )}
      </div>
    </div>
  );
}

function ClientCard({
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
    <div className="group flex flex-col items-center justify-center gap-2 bg-surface px-4 py-8 text-center transition-colors hover:bg-muted">
      <div className="flex h-16 w-full items-center justify-center">
        {imgOk ? (
          <img
            src={logo}
            alt={name}
            className="max-h-14 max-w-[85%] object-contain opacity-75 transition duration-300 group-hover:opacity-100"
            onError={() => setImgOk(false)}
          />
        ) : (
          <span className="font-display text-sm font-bold text-primary">{abbr}</span>
        )}
      </div>
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
        {industry}
      </span>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <SiteLayout>
      {/* ── HERO ── */}
      <section className="relative isolate min-h-svh overflow-hidden">
        <img
          src={heroImg}
          alt="Kuwait construction skyline"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 gradient-hero" />
        <BlueprintGrid />
        <div className="container-page relative flex min-h-svh flex-col justify-center pt-32 pb-24 text-white">
          <div className="max-w-3xl animate-[fade-in_0.8s_ease-out]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Kuwait · Building Construction & Contracting
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white! text-balance md:text-6xl lg:text-7xl">
              Building Reliable Structures
              <br className="hidden md:block" />
              <span className="text-accent"> Across Kuwait</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Eastern Legend Building Construction Co. W.L.L. delivers end-to-end construction,
              contracting, MEP, fit-out, and project support solutions with a strong commitment to
              quality, safety, and client satisfaction.
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
                Explore Services
              </Link>
            </div>
            <div className="mt-12 grid max-w-xl gap-3 sm:grid-cols-3">
              {[
                { icon: MapPin, label: "Kuwait-Based Contractor" },
                { icon: CheckCircle2, label: "End-to-End Delivery" },
                { icon: ShieldCheck, label: "Quality & Safety Focused" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-3 rounded-md border border-white/15 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <b.icon size={16} className="shrink-0 text-accent" />
                  <span className="text-xs font-medium text-white/90">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo marquee anchored to the bottom of the hero */}
        <LogoMarquee />
      </section>

      {/* ── STATS STRIP ── */}
      <div className="bg-primary-dark">
        <div className="container-page grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-6 py-7 text-center">
              <span className="font-display text-2xl font-bold text-accent md:text-3xl">
                {s.value}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-widest text-white/45">
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <div className="h-px bg-white/10" />
      </div>

      {/* ── ABOUT PREVIEW ── */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-xl bg-accent/10" />
              <img
                src={aboutImg}
                alt="Eastern Legend engineers on construction site"
                width={1280}
                height={960}
                loading="lazy"
                className="rounded-xl object-cover shadow-elevated"
              />
              <div className="absolute -bottom-5 -right-5 hidden rounded-xl border border-white/20 bg-primary p-5 text-white shadow-elevated md:block">
                <div className="font-display text-3xl font-bold text-white! leading-none">12+</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                  Major Clients
                </div>
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
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
              >
                More about us <ArrowRight size={16} />
              </Link>
              <span className="h-4 w-px bg-border" aria-hidden />
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-accent"
              >
                Our services <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CORE SERVICES ── */}
      <section className="relative bg-muted/40 py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-border" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Core Services"
              title="Engineering Capabilities Across the Full Project Lifecycle"
              subtitle="Integrated construction, contracting, and technical services delivered with precision and accountability across Kuwait."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <article className="group relative h-full rounded-xl border border-border bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated">
                  <div className="pointer-events-none absolute right-5 top-5 select-none font-display text-5xl font-bold text-primary/6">
                    {s.num}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <s.icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-accent"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COMMERCIAL & TECHNICAL ── */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Commercial & Technical Services"
              title="Specialist Support Beyond Core Construction"
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {COMMERCIAL.map((c) => (
              <div
                key={c.title}
                className="group bg-surface p-7 transition-colors hover:bg-muted/60"
              >
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

      {/* ── QUALITY & SAFETY ── */}
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <img
          src={qualityImg}
          alt=""
          width={1280}
          height={960}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-br from-primary-dark via-primary to-primary-dark/80"
          aria-hidden
        />
        <BlueprintGrid />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              light
              eyebrow="Quality & Safety"
              title="Quality Assurance & Safety at Every Stage"
              subtitle="Eastern Legend is fully committed to maintaining high standards of quality and safety on every project — from mobilization through to handover and beyond."
            />
            <Link
              to="/quality-safety"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              Our quality commitment <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {QUALITY_POINTS.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/5 p-4 backdrop-blur"
                >
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm leading-snug text-white/90">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our Clients"
              title="Trusted by Leading Organizations"
              subtitle="A proven track record of delivering quality construction and technical services to leading private and public sector organizations across Kuwait."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
            {CLIENTS.map((c, i) => (
              <Reveal key={c.name} delay={i * 30}>
                <ClientCard name={c.name} abbr={c.abbr} industry={c.industry} logo={c.logo} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-8 text-center">
              <Link
                to="/clients"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-accent"
              >
                View all clients <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROJECTS ── */}
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
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/85 via-primary/15 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block rounded bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                        {p.cat}
                      </span>
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
          <Reveal>
            <div className="mt-10 text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-muted"
              >
                View all projects <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
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
              {WHY.map((w, i) => (
                <li key={w} className="flex items-start gap-3 text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="leading-snug text-foreground">{w}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
              >
                Start a conversation <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={whyImg}
                alt="High-rise construction Kuwait"
                width={1280}
                height={1280}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-primary-dark/90 to-transparent p-8 text-white">
                <div className="font-display text-xl font-bold text-white!">
                  Built for Kuwait's Market
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Compliant. Coordinated. Completed on time.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="relative overflow-hidden">
        <img
          src={ctaImg}
          alt=""
          width={1920}
          height={800}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-primary-dark/88" aria-hidden />
        <BlueprintGrid />
        <div className="container-page relative py-20 text-center text-white md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Ready to Build?
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold text-white! text-balance md:text-5xl">
            Planning a Construction Project in Kuwait?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">
            Partner with Eastern Legend for reliable construction, contracting, MEP, fit-out, and
            project support services.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-elevated transition hover:bg-white"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/96566935287"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-elevated transition hover:bg-[#1fb855]"
            >
              <WaIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
            <a
              href="tel:+96566935287"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
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
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  Block 11, Mekka Street, Building 6659, Floor 1, Office No. 4, Fahaheel, Kuwait.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone size={18} className="shrink-0 text-accent" />
                <a href="tel:+96566935287" className="transition-colors hover:text-accent">
                  +965 6693 5287
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-accent" />
                <a href="tel:+96565646413" className="transition-colors hover:text-accent">
                  +965 6564 6413
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-accent" />
                <a
                  href="mailto:info@easternlegendkw.com"
                  className="transition-colors hover:text-accent"
                >
                  info@easternlegendkw.com
                </a>
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
              <h3 className="text-xl font-bold">Send an Inquiry</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                All fields are required. We typically respond within one business day.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
