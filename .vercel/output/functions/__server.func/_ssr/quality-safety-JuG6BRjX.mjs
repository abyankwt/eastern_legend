import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHero } from "./SiteLayout-BBOpJ5dH.mjs";
import { R as Reveal } from "./Reveal-CZDP3d_Y.mjs";
import { S as SectionHeading } from "./SectionHeading-B53j4DAH.mjs";
import { B as BlueprintGrid } from "./BlueprintGrid-10hvVBdt.mjs";
import { q as qualityImg } from "./quality-safety-D7MeNRjN.mjs";
import "../_libs/sonner.mjs";
import { C as CircleCheck, F as FileCheck, H as HardHat, M as Microscope, a as ClipboardCheck, G as GraduationCap, S as ShieldCheck, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const PILLARS = [{
  icon: FileCheck,
  title: "Quality Assurance Process",
  desc: "Approved methods, documented procedures, and accountability at every project phase — from pre-construction planning through to final handover."
}, {
  icon: HardHat,
  title: "Site Safety Monitoring",
  desc: "Continuous monitoring, daily toolbox talks, hazard identification, and proactive risk management across all active sites."
}, {
  icon: Microscope,
  title: "Certified Materials",
  desc: "Sourcing of certified, compliant materials with full traceability and documentation to meet Kuwait regulatory and client requirements."
}, {
  icon: ClipboardCheck,
  title: "Testing & Inspections",
  desc: "Independent testing, structured site inspections, NCR tracking, and corrective-action workflows to maintain quality through execution."
}, {
  icon: GraduationCap,
  title: "Worker Safety Training",
  desc: "Ongoing HSE and skill training for engineers, supervisors, and site teams — ensuring every person on site knows their responsibilities."
}, {
  icon: ShieldCheck,
  title: "Kuwait Standards Compliance",
  desc: "Full alignment with Kuwait Ministry regulations, building codes, environmental standards, and client-specific HSE requirements."
}];
const POINTS = ["Approved construction methods and documented procedures", "Certified materials with full traceability", "Regular site inspections and quality checks", "Continuous on-site safety monitoring", "Ongoing HSE training for all site personnel", "Full compliance with Kuwait regulations and standards"];
function QualityPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Quality & Safety", title: "Quality Assurance & Safety at Every Stage", subtitle: "A disciplined approach to QA/QC and HSE — embedded in every project from mobilization to handover, not applied as an afterthought." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid items-center gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 -z-10 rounded-xl bg-primary/5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: qualityImg, alt: "Safety inspector on construction site", width: 1280, height: 960, loading: "lazy", className: "rounded-xl object-cover shadow-elevated" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-5 -right-5 hidden rounded-xl border border-white/20 bg-primary p-5 text-white shadow-elevated md:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-white! leading-none", children: "100%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/60", children: "Site Compliance Focus" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 100, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { align: "left", eyebrow: "Our Commitment", title: "Quality and safety are non-negotiable.", subtitle: "Eastern Legend is fully committed to maintaining high standards of quality and safety in every project. Our process includes approved construction methods, certified materials, proper testing procedures, regular inspections, continuous site safety monitoring, staff training, and full compliance with Kuwait regulations and standards." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-7 grid gap-3 sm:grid-cols-2", children: POINTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 18, className: "mt-0.5 shrink-0 text-accent" }),
          p
        ] }, p)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-muted/40 py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 h-px bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Quality Pillars", title: "How We Deliver Consistent Quality", subtitle: "Six integrated commitments that run through every Eastern Legend project — regardless of scope, sector, or client." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: PILLARS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-xl border border-border bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { size: 22 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: p.desc })
        ] }) }, p.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-primary py-20 text-white md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BlueprintGrid, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative grid items-center gap-10 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-accent", children: "Site Management Discipline" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl font-bold text-white! md:text-4xl", children: "Quality you can audit, safety you can verify." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-white/75", children: "Documented procedures, traceable materials, trained teams, and structured inspections — across every active Eastern Legend site." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-white", children: [
              "Request a Quote ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15", children: "View Services" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [{
          v: "QA/QC",
          l: "Quality Process"
        }, {
          v: "HSE",
          l: "Safety Framework"
        }, {
          v: "100%",
          l: "Certified Materials"
        }, {
          v: "Daily",
          l: "Site Inspections"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-accent", children: s.v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs font-medium uppercase tracking-wider text-white/55", children: s.l })
        ] }, s.l)) })
      ] })
    ] })
  ] });
}
export {
  QualityPage as component
};
