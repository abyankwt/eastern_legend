import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import {
  CheckCircle2,
  Target,
  Eye,
  Gem,
  ShieldCheck,
  Users,
  HandHeart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import teamImg from "@/assets/about-team.jpg";
import siteImg from "@/assets/engineers-onsite.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Eastern Legend Building Construction Co. W.L.L." },
      {
        name: "description",
        content:
          "Learn about Eastern Legend's mission, vision, values, and approach to building construction and contracting in Kuwait.",
      },
      { property: "og:title", content: "About Eastern Legend" },
      {
        property: "og:description",
        content:
          "Kuwait-based construction company committed to quality, safety, and client satisfaction.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const STATS = [
  { value: "12+", label: "Major Clients Served" },
  { value: "7", label: "Core Service Lines" },
  { value: "End-to-End", label: "Project Delivery" },
  { value: "Fahaheel", label: "Kuwait Operations" },
] as const;

const VALUES = [
  {
    icon: Gem,
    title: "Quality",
    desc: "Every project is held to the highest standards of materials, workmanship, and process.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    desc: "Site safety is non-negotiable — embedded in every decision from planning to handover.",
  },
  {
    icon: HandHeart,
    title: "Integrity",
    desc: "Honest communication, transparent reporting, and accountable execution on every project.",
  },
  {
    icon: CheckCircle2,
    title: "Reliability",
    desc: "We deliver what we commit to — on time, to scope, and to budget.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear reporting structures and open communication with every client, at every stage.",
  },
  {
    icon: Sparkles,
    title: "Technical Excellence",
    desc: "Continuous investment in engineering capability, methods, and trained personnel.",
  },
  {
    icon: Users,
    title: "Client Commitment",
    desc: "Long-term relationships, not one-off transactions — our clients return because we deliver.",
  },
] as const;

const APPROACH = [
  {
    step: "01",
    title: "Pre-Construction Planning",
    desc: "Detailed scope definition, scheduling, value engineering, and coordinated procurement before a single tool is deployed.",
  },
  {
    step: "02",
    title: "Mobilization & Site Setup",
    desc: "Structured site organization, safety briefing, facilities setup, and team deployment aligned to the project program.",
  },
  {
    step: "03",
    title: "Construction & Site Supervision",
    desc: "Continuous supervision, daily QA/QC checks, safety monitoring, and proactive issue resolution throughout execution.",
  },
  {
    step: "04",
    title: "Testing, Commissioning & Handover",
    desc: "Rigorous system testing, independent inspections, documented defect resolution, and clean, structured project handover.",
  },
] as const;

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="A Kuwait-Based Contractor Built on Engineering Discipline"
        subtitle="Eastern Legend Building Construction Co. W.L.L. delivers integrated construction, MEP, fit-out, and project support solutions — guided by quality, safety, and client commitment."
      />

      {/* Stats strip */}
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

      {/* Who we are */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-xl bg-accent/10" />
              <img
                src={teamImg}
                alt="Eastern Legend engineering team"
                width={1280}
                height={960}
                loading="lazy"
                className="rounded-xl object-cover shadow-elevated"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Engineering Integrity on Every Site"
              subtitle="We are a contracting company focused on building construction and integrated technical services. With experienced engineering teams, structured site operations, and disciplined project management, we deliver safe, compliant, and high-quality outcomes for projects of varying scale and complexity."
            />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Experienced engineering teams",
                "Structured site operations",
                "Transparent execution",
                "Reliable lifecycle management",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="absolute inset-x-0 h-px bg-border" />
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-border bg-surface p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Target size={22} />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To deliver safe, reliable, and high-quality construction solutions through
                disciplined planning, skilled manpower, technical expertise, and transparent project
                management — from first brief to final handover.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-xl border border-border bg-surface p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Eye size={22} />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To become the most trusted construction partner in Kuwait — recognized for quality
                execution, safety culture, reliable delivery, and long-term client relationships
                built on consistent outcomes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Our Values" title="The Principles That Guide Our Work" />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 50}>
                <div className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <v.icon size={20} />
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold">{v.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Project Approach"
              title="Disciplined Execution from Day One"
              subtitle="Our process is built around clear scope definition, methodical planning, and transparent communication. We integrate engineering, site operations, and quality control to keep every project on track from mobilization to handover."
            />
            <div className="mt-10 space-y-5">
              {APPROACH.map((a) => (
                <div key={a.step} className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent/30 font-display text-sm font-bold text-accent">
                    {a.step}
                  </div>
                  <div>
                    <div className="font-semibold">{a.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-xl bg-primary/5" />
              <img
                src={siteImg}
                alt="Engineers reviewing construction plans"
                width={1280}
                height={960}
                loading="lazy"
                className="rounded-xl object-cover shadow-elevated"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Client commitment CTA */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <div className="rounded-xl border border-border bg-surface p-10 shadow-card md:p-14">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                    Client Commitment
                  </span>
                </div>
                <h2 className="mt-5 text-3xl font-bold md:text-4xl">
                  We measure success by client outcomes.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Our commitment is simple: deliver what we promise, communicate honestly, and stand
                  behind the quality of our work. We build long-term relationships, not transactions
                  — and our client list reflects that.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                  >
                    Start a Project Discussion <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/clients"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary"
                  >
                    View Our Clients
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
