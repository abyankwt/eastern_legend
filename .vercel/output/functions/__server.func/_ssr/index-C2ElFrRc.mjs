import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHero } from "./SiteLayout-BBOpJ5dH.mjs";
import { R as Reveal } from "./Reveal-CZDP3d_Y.mjs";
import { B as BLOG_POSTS } from "./router-BCVc4EjC.mjs";
import "../_libs/sonner.mjs";
import { q as Calendar, e as Clock, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function BlogIndexPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Blog", title: "Construction Insights from Kuwait's Building Industry", subtitle: "Expert guides, technical explainers, and practical advice for developers, project owners, and construction professionals in Kuwait." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
        slug: BLOG_POSTS[0].slug
      }, className: "group mb-12 grid items-center gap-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all hover:border-accent/40 hover:shadow-elevated lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video overflow-hidden bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center blueprint-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent", children: BLOG_POSTS[0].category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-2xl font-bold text-white leading-snug max-w-xs mx-auto text-balance", children: BLOG_POSTS[0].title })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 lg:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent", children: BLOG_POSTS[0].category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl font-bold leading-snug group-hover:text-accent transition-colors md:text-3xl", children: BLOG_POSTS[0].title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: BLOG_POSTS[0].excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 13 }),
              formatDate(BLOG_POSTS[0].publishDate)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13 }),
              BLOG_POSTS[0].readingTime,
              " min read"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors", children: [
            "Read article ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-2", children: BLOG_POSTS.slice(1).map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
        slug: post.slug
      }, className: "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-primary blueprint-grid flex items-center justify-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-lg font-bold text-white leading-snug text-balance", children: post.title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block self-start rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-bold leading-snug group-hover:text-accent transition-colors", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-5 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
              post.readingTime,
              " min read"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors", children: [
              "Read ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ] })
      ] }) }, post.slug)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 rounded-xl border border-border bg-muted/40 p-8 text-center md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: "Have a project to discuss?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-lg text-muted-foreground", children: "Our team of construction specialists is available to advise on your Kuwait project — from pre-construction through to handover." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark", children: [
            "Contact Our Team ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/", className: "inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-muted", children: "View Our Services" })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  BlogIndexPage as component
};
