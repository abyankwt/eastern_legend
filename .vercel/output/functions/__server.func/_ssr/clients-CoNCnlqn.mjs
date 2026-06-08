import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHero } from "./SiteLayout-BBOpJ5dH.mjs";
import { R as Reveal } from "./Reveal-CZDP3d_Y.mjs";
import "../_libs/sonner.mjs";
import { C as CircleCheck, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const CLIENTS = [{
  name: "Kuwait Oil Company",
  abbr: "KOC",
  industry: "Oil & Gas",
  logo: "/client-logos/koc.png",
  desc: "Construction and site facility services in support of KOC operations across Kuwait."
}, {
  name: "ACICO Group",
  abbr: "ACICO",
  industry: "Construction",
  logo: "/client-logos/acico.png",
  desc: "Building contracting and civil construction services for residential and commercial developments."
}, {
  name: "Boubyan Gases Manufacturing Co.",
  abbr: "BGMC",
  industry: "Industrial",
  logo: "/client-logos/boubyan.png",
  desc: "Industrial construction and MEP works for gas manufacturing infrastructure."
}, {
  name: "Dar Al Saha Polyclinic",
  abbr: "DAS",
  industry: "Healthcare",
  logo: "/client-logos/dar-al-saha.png",
  desc: "Fit-out and interior construction services for healthcare facility environments."
}, {
  name: "Kuwait Catalyst Company",
  abbr: "KCC",
  industry: "Petrochemical",
  logo: "/client-logos/kcc.png",
  desc: "Specialized construction and site support for petrochemical plant operations."
}, {
  name: "Huawei",
  abbr: "HW",
  industry: "Technology",
  logo: "/client-logos/huawei.png",
  desc: "Site office facilities and construction support for technology infrastructure projects."
}, {
  name: "Wajda Group",
  abbr: "WAJDA",
  industry: "Real Estate",
  logo: "/client-logos/wajda.png",
  desc: "Residential and commercial building contracting for real estate developments."
}, {
  name: "STC",
  abbr: "STC",
  industry: "Telecom",
  logo: "/client-logos/stc.png",
  desc: "Site facility setup and construction support for telecommunications infrastructure."
}, {
  name: "National Bank of Kuwait",
  abbr: "NBK",
  industry: "Banking",
  logo: "/client-logos/nbk.png",
  desc: "Fit-out and interior construction services for corporate banking environments."
}, {
  name: "FDH JV",
  abbr: "FDH",
  industry: "Joint Venture",
  logo: "/client-logos/fdh-jv.png",
  desc: "Collaborative construction services for joint venture project scopes across Kuwait."
}, {
  name: "Alshaya Group",
  abbr: "ASG",
  industry: "Retail",
  logo: "/client-logos/alshaya.png",
  desc: "Interior fit-out and construction services for retail brand environments across Kuwait."
}, {
  name: "Alghanim Industries",
  abbr: "AGI",
  industry: "Conglomerate",
  logo: "/client-logos/alghanim.png",
  desc: "Industrial, commercial, and facility construction support across the Alghanim portfolio."
}];
const SECTORS = ["Oil & Gas", "Construction", "Industrial", "Healthcare", "Petrochemical", "Technology", "Real Estate", "Telecom", "Banking", "Retail"];
function LogoCard({
  name,
  abbr,
  industry,
  logo
}) {
  const [imgOk, setImgOk] = reactExports.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-24 w-full items-center justify-center", children: imgOk ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: name, className: "max-h-20 max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105", onError: () => setImgOk(false) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-1 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold text-primary", children: abbr }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold leading-snug text-foreground/70", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent", children: industry })
    ] })
  ] });
}
function ClientsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Clients", title: "Trusted by Leading Organizations in Kuwait", subtitle: "We are proud to have worked with major private and public sector organizations across Kuwait, supporting projects with reliable construction, technical, and operational services." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex flex-wrap items-center gap-2 py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Sectors served:" }),
      SECTORS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground", children: s }, s))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-secondary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.22em] text-secondary", children: "Our Clients" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-bold md:text-4xl", children: "Organizations That Trust Eastern Legend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "A portfolio of major clients spanning oil & gas, petrochemical, industrial, banking, telecom, retail, and real estate sectors across Kuwait." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4", children: CLIENTS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 35, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoCard, { name: c.name, abbr: c.abbr, industry: c.industry, logo: c.logo }) }, c.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-muted/40 py-20 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 h-px bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-secondary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.22em] text-secondary", children: "Scope of Work" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl font-bold md:text-3xl", children: "Services Delivered Across Our Client Portfolio" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: CLIENTS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 30, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 rounded-xl border border-border bg-surface p-5 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs font-bold text-primary", children: c.abbr }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold leading-tight text-foreground", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent", children: c.industry })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-muted-foreground", children: c.desc })
          ] })
        ] }) }, c.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid items-center gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-secondary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.22em] text-secondary", children: "Why We're Trusted" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl font-bold md:text-4xl", children: "Consistent delivery builds long-term relationships." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: "Our clients return because we deliver on our commitments — on time, to quality, and with clear communication throughout. From Kuwait Oil Company to Alshaya Group, our track record spans oil & gas, industrial, healthcare, retail, and commercial sectors." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-7 space-y-3", children: ["Single-point accountability from planning to handover", "Experienced teams across all project types and sectors", "Quality and safety standards maintained on every site", "Transparent reporting and proactive communication"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 18, className: "mt-0.5 shrink-0 text-accent" }),
          p
        ] }, p)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-surface p-8 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl font-bold text-primary", children: "12+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-lg font-semibold", children: "Major Organizations Served" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: "Across oil & gas, industrial, healthcare, retail, banking, telecom, and real estate sectors throughout Kuwait." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 border-t border-border pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark", children: [
          "Work with us ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }) })
      ] }) })
    ] }) })
  ] });
}
export {
  ClientsPage as component
};
