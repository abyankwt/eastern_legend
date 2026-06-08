import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHero } from "./SiteLayout-BBOpJ5dH.mjs";
import { R as Reveal } from "./Reveal-CZDP3d_Y.mjs";
import { p as projRes, a as projCom, b as projInd, c as projMep, d as projFit, e as projSite } from "./proj-site-BplPfwn2.mjs";
import "../_libs/sonner.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const PROJECTS = [{
  img: projRes,
  title: "Residential Tower Project",
  cat: "Residential",
  desc: "Multi-storey residential building with full civil and structural scope, MEP works, and finishing.",
  scope: "Civil, Structural, MEP"
}, {
  img: projRes,
  title: "Villa Development",
  cat: "Residential",
  desc: "Premium villa cluster delivered turnkey with landscaping, MEP installations, and interior finishing.",
  scope: "Turnkey Build"
}, {
  img: projCom,
  title: "Corporate Office Complex",
  cat: "Commercial",
  desc: "Glass-facade commercial office building with full MEP scope, fit-out, and building management systems.",
  scope: "Civil, MEP, Fit-out"
}, {
  img: projCom,
  title: "Retail Plaza",
  cat: "Commercial",
  desc: "Mixed-use retail destination with anchor tenants, structured parking, and MEP installations.",
  scope: "Building Contracting"
}, {
  img: projInd,
  title: "Industrial Warehouse",
  cat: "Industrial",
  desc: "Large-span steel-structure warehouse with loading bays, utility connections, and site office setup.",
  scope: "Structural, Site Facilities"
}, {
  img: projInd,
  title: "Manufacturing Facility",
  cat: "Industrial",
  desc: "Process-driven industrial facility with structural steel works, MEP, and safety compliance scope.",
  scope: "Industrial Contracting"
}, {
  img: projMep,
  title: "HVAC & Plumbing Installation",
  cat: "MEP",
  desc: "Full MEP package for a commercial building — HVAC, plumbing, drainage, and low-current systems.",
  scope: "MEP Contracting"
}, {
  img: projMep,
  title: "Electrical Power Upgrade",
  cat: "MEP",
  desc: "Power distribution panel replacement, lighting upgrade, and LV system installation for an operational facility.",
  scope: "Electrical Works"
}, {
  img: projFit,
  title: "Corporate Office Fit-out",
  cat: "Fit-out",
  desc: "Premium interior fit-out with glass partitions, raised flooring, feature lighting, and integrated MEP.",
  scope: "MEP Fit-out & Interior"
}, {
  img: projFit,
  title: "Retail Showroom Fit-out",
  cat: "Fit-out",
  desc: "Retail interior with custom joinery, brand-aligned finishes, feature display systems, and electrical works.",
  scope: "Interior & MEP"
}, {
  img: projSite,
  title: "Site Office Setup",
  cat: "Site Facilities",
  desc: "Turnkey portable office cabin complex with utility connections, furniture, and site welfare facilities.",
  scope: "Site Office Facilities"
}, {
  img: projSite,
  title: "Temporary Project Facilities",
  cat: "Site Facilities",
  desc: "Full site support infrastructure including storage, sanitation, fencing, and utility rental units.",
  scope: "Rental Services"
}];
const FILTERS = ["All", "Residential", "Commercial", "Industrial", "MEP", "Fit-out", "Site Facilities"];
function ProjectsPage() {
  const [active, setActive] = reactExports.useState("All");
  const list = reactExports.useMemo(() => active === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === active), [active]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Projects", title: "Projects Built on Trust, Planning, and Execution", subtitle: "A snapshot of the project categories we deliver across Kuwait. Representative images are shown — actual project photography is added as projects complete." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-2", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(f), className: `rounded-full border px-5 py-2 text-sm font-medium transition-all ${active === f ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent"}`, children: f }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: list.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 6 * 50, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group overflow-hidden rounded-xl bg-surface shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-4/3 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, width: 1024, height: 768, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-primary/85 via-primary/10 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground", children: p.cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-white/15 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur", children: p.scope })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: p.desc })
        ] })
      ] }) }, `${p.title}-${i}`)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 rounded-xl border border-border bg-muted/40 p-8 text-center md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Have a project in mind?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-lg text-muted-foreground", children: "Share your brief and we will outline the right approach, team, and delivery structure for your specific project requirements." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark", children: [
            "Request a Quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-muted", children: "View Services" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ProjectsPage as component
};
