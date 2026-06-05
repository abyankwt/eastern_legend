import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CheckCircle2, Target, Eye, Gem, ShieldCheck, Users, Building2, Sparkles, HandHeart } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";
import siteImg from "@/assets/engineers-onsite.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Eastern Legend Building Construction Co. W.L.L." },
      { name: "description", content: "Learn about Eastern Legend's mission, vision, values, and approach to building construction and contracting in Kuwait." },
      { property: "og:title", content: "About Eastern Legend" },
      { property: "og:description", content: "Kuwait-based construction company committed to quality, safety, and client satisfaction." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Gem, t: "Quality" },
  { icon: ShieldCheck, t: "Safety" },
  { icon: HandHeart, t: "Integrity" },
  { icon: CheckCircle2, t: "Reliability" },
  { icon: Eye, t: "Transparency" },
  { icon: Sparkles, t: "Technical Excellence" },
  { icon: Users, t: "Client Commitment" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="A Kuwait-Based Contractor Built on Engineering Discipline"
        subtitle="Eastern Legend Building Construction Co. W.L.L. delivers integrated construction, MEP, fit-out, and project support solutions — guided by quality, safety, and client commitment."
      />

      {/* Intro */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img src={teamImg} alt="Engineering team meeting" width={1280} height={960} loading="lazy" className="rounded-xl object-cover shadow-elevated" />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Engineering integrity, on every site."
              subtitle="We are a contracting company focused on building construction and integrated technical services. With experienced engineering teams, structured site operations, and disciplined project management, we deliver safe, compliant, and high-quality outcomes for projects of varying scale and complexity."
            />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Experienced engineering teams", "Structured site operations", "Transparent execution", "Reliable lifecycle management"].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={18} className="mt-0.5 text-accent shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-border bg-surface p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Target size={22} />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To deliver safe, reliable, and high-quality construction solutions
                through disciplined planning, skilled manpower, technical expertise,
                and transparent project management.
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
                To become a trusted construction partner in Kuwait, recognized for
                quality execution, safety, reliability, and long-term client relationships.
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
          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 50}>
                <div className="group flex h-full flex-col items-start rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <v.icon size={20} />
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold">{v.t}</div>
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
            <ul className="mt-7 space-y-3 text-sm">
              {[
                "Detailed pre-construction planning and scheduling",
                "Coordinated engineering and procurement",
                "Structured site organization and supervision",
                "Continuous QA/QC and HSE monitoring",
                "Documented handover and post-completion support",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 text-accent shrink-0" /> <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <img src={siteImg} alt="Engineers reviewing plans" width={1280} height={960} loading="lazy" className="rounded-xl object-cover shadow-elevated" />
          </Reveal>
        </div>
      </section>

      {/* Client commitment */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Client Commitment"
              title="We measure success by client outcomes."
              subtitle="Our commitment is simple: deliver what we promise, communicate honestly, and stand behind the quality of our work. We build long-term relationships, not transactions."
            />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
