import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-3xl ${a}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-accent" : "text-secondary"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-px w-8 ${light ? "bg-accent" : "bg-secondary"}` }),
          eyebrow
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: `mt-4 text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl ${light ? "!text-white" : ""}`,
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: `mt-5 text-base leading-relaxed md:text-lg ${light ? "text-white/75" : "text-muted-foreground"}`,
        children: subtitle
      }
    )
  ] });
}
export {
  SectionHeading as S
};
