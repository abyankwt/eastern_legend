import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
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
      { name: "description", content: "Project categories delivered by Eastern Legend — residential, commercial, industrial, MEP, fit-out, and site facilities across Kuwait." },
      { property: "og:title", content: "Projects" },
      { property: "og:description", content: "Projects built on trust, planning, and execution." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Cat = "All" | "Residential" | "Commercial" | "Industrial" | "MEP" | "Fit-out" | "Site Facilities";

const PROJECTS: { img: string; t: string; cat: Exclude<Cat, "All">; d: string }[] = [
  { img: projRes, t: "Residential Tower Project", cat: "Residential", d: "Multi-storey residential building with full civil and finishing scope." },
  { img: projRes, t: "Villa Development", cat: "Residential", d: "Premium villa cluster delivered turnkey with landscaping." },
  { img: projCom, t: "Corporate Office Complex", cat: "Commercial", d: "Glass-facade office building with full MEP and fit-out." },
  { img: projCom, t: "Retail Plaza", cat: "Commercial", d: "Mixed-use retail destination with anchor tenants and parking." },
  { img: projInd, t: "Industrial Warehouse", cat: "Industrial", d: "Large-span warehouse with loading bays and utility connections." },
  { img: projInd, t: "Manufacturing Facility", cat: "Industrial", d: "Process-driven industrial facility with structural steel works." },
  { img: projMep, t: "HVAC & Plumbing Installation", cat: "MEP", d: "Full MEP package including HVAC, plumbing, and low-current systems." },
  { img: projMep, t: "Electrical Power Upgrade", cat: "MEP", d: "Power distribution and lighting upgrade for a commercial facility." },
  { img: projFit, t: "Corporate Office Fit-out", cat: "Fit-out", d: "Premium interior fit-out with glass partitions and lighting design." },
  { img: projFit, t: "Retail Showroom Fit-out", cat: "Fit-out", d: "Retail interior with custom joinery and brand-aligned finishes." },
  { img: projSite, t: "Site Office Setup", cat: "Site Facilities", d: "Turnkey portable office cabins with utilities and furnishing." },
  { img: projSite, t: "Temporary Facilities", cat: "Site Facilities", d: "Site support facilities, storage, and utility connections." },
];

const FILTERS: Cat[] = ["All", "Residential", "Commercial", "Industrial", "MEP", "Fit-out", "Site Facilities"];

function ProjectsPage() {
  const [active, setActive] = useState<Cat>("All");
  const list = useMemo(() => active === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === active), [active]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Projects"
        title="Projects Built on Trust, Planning, and Execution"
        subtitle="A snapshot of the project categories we deliver across Kuwait. Project images shown are representative — actual project photography is added as projects complete."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  active === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={`${p.t}-${i}`} delay={i * 40}>
                <article className="group overflow-hidden rounded-xl bg-surface shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.t} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                        {p.cat}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{p.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
