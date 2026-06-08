import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./_ssr/SiteLayout-BBOpJ5dH.mjs";
import { R as Reveal } from "./_ssr/Reveal-CZDP3d_Y.mjs";
import { a as Route, S as SERVICES } from "./_ssr/router-BCVc4EjC.mjs";
import "./_libs/sonner.mjs";
import { q as Calendar, e as Clock, A as ArrowRight, r as ChevronUp, s as ChevronDown } from "./_libs/lucide-react.mjs";
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
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function BlogPostPage() {
  const post = Route.useLoaderData();
  const relatedServices = SERVICES.filter((s) => post.relatedServices.includes(s.slug));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-primary-dark pt-36 pb-16 text-white md:pt-48 md:pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blueprint-grid opacity-25", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Breadcrumb", className: "mb-8 flex items-center gap-2 text-xs text-white/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-white/80", children: "Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/", className: "hover:text-white/80", children: "Blog" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 truncate max-w-[200px]", children: post.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent", children: post.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-3xl font-bold leading-[1.15] text-white! text-balance md:text-4xl lg:text-5xl", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-5 text-sm text-white/55", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
            formatDate(post.publishDate)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14 }),
            post.readingTime,
            " min read"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg leading-relaxed text-white/75", children: post.excerpt })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "lg:col-span-2 prose-article", children: [
        post.sections.map((section, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-xl font-bold md:text-2xl", children: section.heading }),
          section.paragraphs.map((para, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 leading-relaxed text-muted-foreground", children: para }, j)),
          section.bullets && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5", children: section.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15, className: "mt-0.5 shrink-0 text-accent" }),
            b
          ] }, b)) })
        ] }) }, i)),
        post.faqs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 border-t border-border pt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 text-xl font-bold md:text-2xl", children: "Frequently Asked Questions" }),
          post.faqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { q: faq.q, a: faq.a }, faq.q))
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-accent/30 bg-primary p-6 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white!", children: "Have a Kuwait project?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/70", children: "Speak to our team for expert construction advice and a free project consultation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-col gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition hover:bg-white", children: [
              "Request a Quote ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+96566935287", className: "inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-4 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10", children: "Call +965 6693 5287" })
          ] })
        ] }) }),
        relatedServices.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-surface p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold", children: "Related Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: relatedServices.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services/$slug", params: {
            slug: s.slug
          }, className: "flex items-center gap-2 text-sm font-medium text-primary hover:text-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 13, className: "shrink-0 text-accent" }),
            s.title
          ] }) }, s.slug)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/", className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary", children: "← Back to all articles" }) })
      ] })
    ] }) }) })
  ] });
}
export {
  BlogPostPage as component
};
