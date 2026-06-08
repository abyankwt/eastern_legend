import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function BlueprintGrid({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: `pointer-events-none absolute inset-0 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blueprint-grid" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        className: "absolute inset-0 h-full w-full opacity-30",
        viewBox: "0 0 1200 600",
        preserveAspectRatio: "none",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "0",
              y1: "120",
              x2: "1200",
              y2: "120",
              stroke: "white",
              strokeOpacity: "0.15",
              strokeWidth: "1",
              strokeDasharray: "6 8"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "200",
              y1: "0",
              x2: "200",
              y2: "600",
              stroke: "white",
              strokeOpacity: "0.1",
              strokeWidth: "1",
              strokeDasharray: "6 8"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "line",
            {
              x1: "1000",
              y1: "0",
              x2: "1000",
              y2: "600",
              stroke: "white",
              strokeOpacity: "0.1",
              strokeWidth: "1",
              strokeDasharray: "6 8"
            }
          )
        ]
      }
    )
  ] });
}
export {
  BlueprintGrid as B
};
