import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import projRes from "@/assets/proj-residential.jpg";
import projCom from "@/assets/proj-commercial.jpg";
import projInd from "@/assets/proj-industrial.jpg";
import projMep from "@/assets/proj-mep.jpg";
import projFit from "@/assets/proj-fitout.jpg";
import projSite from "@/assets/proj-site.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Eastern Legend Building Construction Co. W.L.L." },
      {
        name: "description",
        content:
          "Project categories delivered by Eastern Legend — residential, commercial, industrial, MEP, fit-out, and site facilities across Kuwait.",
      },
      { property: "og:title", content: "Projects" },
      { property: "og:description", content: "Projects built on trust, planning, and execution." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Cat =
  | "All"
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "MEP"
  | "Fit-out"
  | "Site Facilities";

const PROJECTS: {
  img: string;
  title: string;
  cat: Exclude<Cat, "All">;
  desc: string;
  scope: string;
}[] = [
  {
    img: projRes,
    title: "Residential Tower Project",
    cat: "Residential",
    desc: "Multi-storey residential building with full civil and structural scope, MEP works, and finishing.",
    scope: "Civil, Structural, MEP",
  },
  {
    img: projRes,
    title: "Villa Development",
    cat: "Residential",
    desc: "Premium villa cluster delivered turnkey with landscaping, MEP installations, and interior finishing.",
    scope: "Turnkey Build",
  },
  {
    img: projCom,
    title: "Corporate Office Complex",
    cat: "Commercial",
    desc: "Glass-facade commercial office building with full MEP scope, fit-out, and building management systems.",
    scope: "Civil, MEP, Fit-out",
  },
  {
    img: projCom,
    title: "Retail Plaza",
    cat: "Commercial",
    desc: "Mixed-use retail destination with anchor tenants, structured parking, and MEP installations.",
    scope: "Building Contracting",
  },
  {
    img: projInd,
    title: "Industrial Warehouse",
    cat: "Industrial",
    desc: "Large-span steel-structure warehouse with loading bays, utility connections, and site office setup.",
    scope: "Structural, Site Facilities",
  },
  {
    img: projInd,
    title: "Manufacturing Facility",
    cat: "Industrial",
    desc: "Process-driven industrial facility with structural steel works, MEP, and safety compliance scope.",
    scope: "Industrial Contracting",
  },
  {
    img: projMep,
    title: "HVAC & Plumbing Installation",
    cat: "MEP",
    desc: "Full MEP package for a commercial building — HVAC, plumbing, drainage, and low-current systems.",
    scope: "MEP Contracting",
  },
  {
    img: projMep,
    title: "Electrical Power Upgrade",
    cat: "MEP",
    desc: "Power distribution panel replacement, lighting upgrade, and LV system installation for an operational facility.",
    scope: "Electrical Works",
  },
  {
    img: projFit,
    title: "Corporate Office Fit-out",
    cat: "Fit-out",
    desc: "Premium interior fit-out with glass partitions, raised flooring, feature lighting, and integrated MEP.",
    scope: "MEP Fit-out & Interior",
  },
  {
    img: projFit,
    title: "Retail Showroom Fit-out",
    cat: "Fit-out",
    desc: "Retail interior with custom joinery, brand-aligned finishes, feature display systems, and electrical works.",
    scope: "Interior & MEP",
  },
  {
    img: projSite,
    title: "Site Office Setup",
    cat: "Site Facilities",
    desc: "Turnkey portable office cabin complex with utility connections, furniture, and site welfare facilities.",
    scope: "Site Office Facilities",
  },
  {
    img: projSite,
    title: "Temporary Project Facilities",
    cat: "Site Facilities",
    desc: "Full site support infrastructure including storage, sanitation, fencing, and utility rental units.",
    scope: "Rental Services",
  },
];

const FILTERS: Cat[] = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "MEP",
  "Fit-out",
  "Site Facilities",
];

function ProjectsPage() {
  const [active, setActive] = useState<Cat>("All");
  const list = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === active)),
    [active],
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Projects"
        title="Projects Built on Trust, Planning, and Execution"
        subtitle="A snapshot of the project categories we deliver across Kuwait. Representative images are shown — actual project photography is added as projects complete."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="container-page">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  active === f
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={`${p.title}-${i}`} delay={(i % 6) * 50}>
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
                    <div className="absolute inset-0 bg-linear-to-t from-primary/85 via-primary/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="inline-block rounded bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                        {p.cat}
                      </span>
                      <span className="rounded bg-white/15 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">
                        {p.scope}
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

          {/* CTA */}
          <div className="mt-14 rounded-xl border border-border bg-muted/40 p-8 text-center md:p-12">
            <h3 className="text-2xl font-bold">Have a project in mind?</h3>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Share your brief and we will outline the right approach, team, and delivery structure
              for your specific project requirements.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-muted"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
