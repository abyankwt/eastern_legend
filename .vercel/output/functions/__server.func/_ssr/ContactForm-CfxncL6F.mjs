import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { o as objectType, s as stringType, l as literalType } from "../_libs/zod.mjs";
const schema = objectType({
  name: stringType().trim().min(1, "Name is required").max(100),
  company: stringType().trim().max(120).optional().or(literalType("")),
  phone: stringType().trim().min(5, "Phone is required").max(30),
  email: stringType().trim().email("Valid email required").max(160),
  service: stringType().trim().max(80).optional().or(literalType("")),
  details: stringType().trim().min(10, "Please share a few details").max(1500)
});
const SERVICES = [
  "General Contracting",
  "Building Contracting",
  "MEP Contracting",
  "MEP Fit-out & Interior",
  "Blasting & Painting",
  "Site Office Facilities",
  "Rental Services",
  "Project Management",
  "Other"
];
function ContactForm() {
  const [submitting, setSubmitting] = reactExports.useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    toast.success("Inquiry sent. Our team will contact you shortly.");
    e.currentTarget.reset();
  }
  const input = "w-full rounded-md border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "name", type: "text", required: true, className: input, placeholder: "Your full name" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "company",
            type: "text",
            className: input,
            placeholder: "Company name (optional)"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "phone", type: "tel", required: true, className: input, placeholder: "+965 ..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "email",
            type: "email",
            required: true,
            className: input,
            placeholder: "you@company.com"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Service Required" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "service", className: input, defaultValue: "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a service" }),
        SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Project Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          name: "details",
          required: true,
          rows: 5,
          className: input,
          placeholder: "Tell us about your project, location, timeline, and scope..."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        disabled: submitting,
        className: "inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-dark disabled:opacity-60",
        children: submitting ? "Sending..." : "Send Inquiry"
      }
    )
  ] });
}
export {
  ContactForm as C
};
