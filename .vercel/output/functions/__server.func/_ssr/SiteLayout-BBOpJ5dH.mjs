import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { b as MapPin, P as Phone, L as Linkedin, I as Instagram, t as Facebook, X, u as Menu, A as ArrowRight, c as Smartphone, d as Mail } from "../_libs/lucide-react.mjs";
const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services/", label: "Services" },
  { to: "/quality-safety", label: "Quality & Safety" },
  { to: "/clients", label: "Clients" },
  { to: "/projects", label: "Projects" },
  { to: "/blog/", label: "Blog" },
  { to: "/contact", label: "Contact" }
];
function WhatsAppIcon({ size = 14 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
    }
  );
}
function SiteHeader() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed inset-x-0 top-0 z-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary-dark/95 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex items-center justify-between py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-[11px] text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://maps.google.com/?q=Fahaheel,Ahmadi,Kuwait",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hidden items-center gap-1.5 transition-colors hover:text-accent sm:flex",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 11, className: "shrink-0 text-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Fahaheel, Ahmadi, Kuwait" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden h-3 w-px bg-white/30 sm:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:+96566935287",
            className: "flex items-center gap-1.5 transition-colors hover:text-accent",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 11, className: "shrink-0 text-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+965 6693 5287" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://wa.me/96566935287",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "WhatsApp",
            className: "text-white transition-colors hover:text-[#25D366]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { size: 14 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "LinkedIn",
            className: "text-white transition-colors hover:text-[#0A66C2]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 14 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Instagram",
            className: "text-white transition-colors hover:text-[#E1306C]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 14 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Facebook",
            className: "text-white transition-colors hover:text-[#1877F2]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 14 })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `transition-all duration-300 ${scrolled || open ? "bg-surface/95 shadow-card backdrop-blur-md" : "bg-transparent"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex h-24 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "group flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/logo.png",
              alt: "Eastern Legend",
              width: 80,
              height: 80,
              className: `h-20 w-20 object-contain transition-all duration-300 ${scrolled || open ? "" : "rounded-md bg-white p-1.5 shadow-sm"}`
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-7 lg:flex", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              className: `text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"}`,
              activeProps: {
                className: scrolled ? "!text-accent" : "!text-white font-semibold"
              },
              activeOptions: { exact: n.to === "/" },
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden items-center gap-3 lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:bg-secondary hover:text-white hover:-translate-y-0.5",
              children: "Request a Quote"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": open ? "Close menu" : "Open menu",
              onClick: () => setOpen((v) => !v),
              className: `inline-flex h-11 w-11 items-center justify-center rounded-md lg:hidden ${scrolled || open ? "text-primary" : "text-white"}`,
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 })
            }
          )
        ] })
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-surface lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex flex-col gap-1 py-4", children: [
      NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          onClick: () => setOpen(false),
          className: "rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-muted",
          activeProps: { className: "!text-accent !bg-muted" },
          activeOptions: { exact: n.to === "/" },
          children: n.label
        },
        n.to
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-center gap-3 border-t border-border px-3 pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "tel:+96566935287",
          className: "flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 13 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+965 6693 5287" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/contact",
          onClick: () => setOpen(false),
          className: "mt-2 rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground",
          children: "Request a Quote"
        }
      )
    ] }) })
  ] });
}
const QUICK = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services/", label: "Services" },
  { to: "/quality-safety", label: "Quality & Safety" },
  { to: "/clients", label: "Our Clients" },
  { to: "/projects", label: "Projects" },
  { to: "/blog/", label: "Blog" },
  { to: "/contact", label: "Contact" }
];
const SERVICES = [
  { slug: "general-contracting-kuwait", label: "General Contracting" },
  { slug: "building-contracting-kuwait", label: "Building Contracting" },
  { slug: "mep-contracting-kuwait", label: "MEP Contracting" },
  { slug: "mep-fitout-interior-design-kuwait", label: "MEP Fit-out & Interior" },
  { slug: "blasting-painting-kuwait", label: "Blasting & Painting" },
  { slug: "site-office-facilities-kuwait", label: "Site Office Facilities" },
  { slug: "rental-services-kuwait", label: "Rental Services" }
];
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative bg-primary-dark text-white/75", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blueprint-grid opacity-25", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex flex-col items-center justify-between gap-5 py-9 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold text-white!", children: "Ready to start your next project?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/55", children: "Contact our team for construction and contracting solutions across Kuwait." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          className: "inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition hover:bg-white",
          children: [
            "Request a Quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15 })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/logo.png",
            alt: "Eastern Legend Building Construction",
            width: 80,
            height: 80,
            className: "h-20 w-20 rounded-md bg-white object-contain p-2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm font-semibold text-white!/90 leading-snug", children: "Eastern Legend Building Construction Co. W.L.L." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-white/50", children: "Kuwait-based construction and contracting company delivering reliable, quality-driven solutions from planning to completion." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[11px] font-medium text-white/35 uppercase tracking-wider", children: "www.easternlegendkw.com" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white!", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5 text-sm", children: QUICK.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: q.to, className: "transition-colors hover:text-accent", children: q.label }) }, q.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white!", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5 text-sm", children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/services/$slug",
            params: { slug: s.slug },
            className: "text-white/55 transition-colors hover:text-accent",
            children: s.label
          }
        ) }, s.slug)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white!", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 15, className: "mt-0.5 shrink-0 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/55 leading-relaxed", children: "Block 11, Mekka Street, Building 6659, Floor 1, Office No. 4, Fahaheel, Kuwait." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 15, className: "shrink-0 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+96566935287", className: "hover:text-accent transition-colors", children: "+965 6693 5287" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 15, className: "shrink-0 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+96565646413", className: "hover:text-accent transition-colors", children: "+965 6564 6413" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 15, className: "shrink-0 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "mailto:info@easternlegendkw.com",
                className: "text-[13px] hover:text-accent transition-colors",
                children: "info@easternlegendkw.com"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/35 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Eastern Legend Building Construction Co. W.L.L. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-5 gap-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Building Construction & Contracting · Fahaheel, Kuwait" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "hover:text-white/60 transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms-and-conditions", className: "hover:text-white/60 transition-colors", children: "Terms" })
      ] })
    ] }) })
  ] });
}
function WhatsAppFab() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-6 right-6 z-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-14 w-14 wa-float", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 rounded-full bg-[#25D366] wa-ring" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 rounded-full bg-[#25D366] wa-ring-delay" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900/90 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100", children: "Chat on WhatsApp" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "https://wa.me/96566935287",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Chat on WhatsApp",
        className: "relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-110",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            viewBox: "0 0 24 24",
            className: "h-8 w-8",
            fill: "white",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.16c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.15-.47-.27z" })
          }
        )
      }
    )
  ] }) });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFab, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right" })
  ] });
}
function PageHero({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-primary-dark pt-36 pb-24 text-white md:pt-48 md:pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blueprint-grid opacity-25", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute right-0 top-0 h-full w-1/3 -skew-x-6 bg-accent/5 origin-top-right",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-dark/60 to-transparent",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-accent", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.25em] text-accent", children: eyebrow })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 max-w-4xl text-4xl font-bold leading-[1.1] !text-white text-balance md:text-5xl lg:text-[3.5rem]", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg", children: subtitle })
    ] })
  ] });
}
export {
  PageHero as P,
  SiteLayout as S
};
