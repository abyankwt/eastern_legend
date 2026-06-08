import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./_ssr/SiteLayout-BBOpJ5dH.mjs";
import { R as Reveal } from "./_ssr/Reveal-CZDP3d_Y.mjs";
import { B as BlueprintGrid } from "./_ssr/BlueprintGrid-10hvVBdt.mjs";
import { R as Route$1, S as SERVICES } from "./_ssr/router-BCVc4EjC.mjs";
import "./_libs/sonner.mjs";
import { A as ArrowRight, C as CircleCheck, b as MapPin, r as ChevronUp, s as ChevronDown } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
function FAQItem({
  q,
  a
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(!open), className: "flex w-full items-start justify-between gap-4 py-5 text-left", "aria-expanded": open, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold leading-snug", children: q }),
      open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 20, className: "mt-0.5 shrink-0 text-accent" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 20, className: "mt-0.5 shrink-0 text-muted-foreground" })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pb-5 text-sm leading-relaxed text-muted-foreground", children: a })
  ] });
}
function ServiceDetailPage() {
  const service = Route$1.useLoaderData();
  const relatedServices = SERVICES.filter((s) => service.relatedSlugs.includes(s.slug));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-primary-dark pt-36 pb-24 text-white md:pt-48 md:pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blueprint-grid opacity-25", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 h-full w-1/3 origin-top-right -skew-x-6 bg-accent/5", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Breadcrumb", className: "mb-8 flex items-center gap-2 text-xs text-white/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-white/80", children: "Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/", className: "hover:text-white/80", children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: service.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-accent", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-accent", children: service.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 max-w-4xl text-4xl font-bold leading-[1.1] text-white! text-balance md:text-5xl lg:text-[3.5rem]", children: service.headline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-white", children: [
            "Request a Quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+96566935287", className: "inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15", children: "Call Us Now" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5 text-base leading-relaxed text-muted-foreground", children: service.intro.split("\n\n").map((para, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: para.trim() }, i)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-muted/40 p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold uppercase tracking-wide text-primary", children: "What's Included" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: service.includes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16, className: "mt-0.5 shrink-0 text-accent" }),
          item
        ] }, item)) })
      ] }) })
    ] }) }) }),
    service.sections.map((section, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `py-16 md:py-20 ${i % 2 === 0 ? "bg-muted/40" : "bg-background"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 h-px bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold md:text-3xl", children: section.heading }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 leading-relaxed text-muted-foreground", children: section.body }),
        section.bullets && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: section.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "mt-0.5 shrink-0 text-accent" }),
          b
        ] }, b)) })
      ] }) })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16 text-white md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-white!", children: "Industries We Serve" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5", children: service.industries.map((ind) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }),
          ind
        ] }, ind)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 80, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold text-white!", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18, className: "mr-2 inline text-accent" }),
          "Service Areas in Kuwait"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: service.serviceAreas.map((area) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80", children: area }, area)) })
      ] })
    ] }) }),
    service.faqs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-secondary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.22em] text-secondary", children: "FAQ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl font-bold md:text-3xl", children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: service.faqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { q: faq.q, a: faq.a }, faq.q)) })
    ] }) }),
    relatedServices.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-muted/40 py-16 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 h-px bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Related Services" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: relatedServices.map((rel, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 50, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$slug", params: {
          slug: rel.slug
        }, className: "group block rounded-xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-secondary", children: rel.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-semibold leading-snug", children: rel.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent", children: [
            "Learn more ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] })
        ] }) }, rel.slug)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-primary-dark py-20 text-white md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BlueprintGrid, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-accent", children: "Get Started" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl font-bold text-white! md:text-4xl", children: "Ready to discuss your project?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/75", children: "Share your requirements with our team and we will provide a clear, structured response with the right approach for your project." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-white", children: [
            "Request a Quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/96566935287", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20bb5a]", children: "WhatsApp Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+96566935287", className: "inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15", children: "Call +965 6693 5287" })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  ServiceDetailPage as component
};
