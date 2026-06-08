import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-BBOpJ5dH.mjs";
import { C as COMPANY_NAME, N as NAP } from "./router-BCVc4EjC.mjs";
import "../_libs/sonner.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const SECTIONS = [{
  title: "1. Acceptance of Terms",
  content: `By accessing and using the Eastern Legend website at easternlegendkw.com, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our website.

These Terms and Conditions apply to all visitors and users of our website. We reserve the right to update these terms at any time. Your continued use of the website after any changes constitutes your acceptance of the revised terms.`
}, {
  title: "2. Website Use",
  content: `Our website is provided for informational purposes — to enable potential clients to learn about Eastern Legend's construction and contracting services, capabilities, and contact information. You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the site.

You must not:
- Use the website in any way that could damage, disable, or impair the site or server.
- Attempt to gain unauthorized access to any part of the website or its related systems.
- Use any automated tools to scrape, copy, or extract content from the website without our prior written consent.`
}, {
  title: "3. Service Enquiries",
  content: `Information provided through our website contact forms, email, telephone, or WhatsApp represents an expression of interest in our services. It does not constitute a binding offer or contract for construction services. A formal contract for construction or contracting services is only formed when a separate, written agreement is executed by authorized representatives of both parties.

We aim to respond to all genuine service enquiries within two working days.`
}, {
  title: "4. Intellectual Property",
  content: `All content on this website — including text, images, logos, graphics, and the overall design — is the intellectual property of ${COMPANY_NAME} or its licensors and is protected by applicable copyright law. You may not reproduce, distribute, or use any content from this website without our prior written permission, except for personal, non-commercial use.

The Eastern Legend name, logo, and associated marks are trademarks of ${COMPANY_NAME}. Nothing on this website grants any license or right to use these marks.`
}, {
  title: "5. Accuracy of Information",
  content: `We take reasonable care to ensure that information on our website is accurate and up to date. However, we make no warranty or representation about the completeness, accuracy, or fitness for purpose of the information provided. Project images may include illustrative or representative photography. Service descriptions are general in nature and the specific scope, terms, and conditions applicable to any project are defined in the relevant project contract.`
}, {
  title: "6. Limitation of Liability",
  content: `To the maximum extent permitted by applicable law, ${COMPANY_NAME} and its directors, employees, and agents are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or inability to use, our website or the information it contains.

Our total liability for any claim arising from your use of this website shall not exceed KD 100 (one hundred Kuwaiti Dinars).

Nothing in these terms excludes or limits liability for death or personal injury caused by our negligence, fraud, or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under applicable law.`
}, {
  title: "7. Third-Party Links",
  content: `Our website may contain links to third-party websites. These links are provided for convenience only. We do not control or endorse the content of any third-party websites and are not responsible for their content, accuracy, or privacy practices.`
}, {
  title: "8. Governing Law",
  content: `These Terms and Conditions are governed by and construed in accordance with the laws of the State of Kuwait. Any disputes arising from or relating to these terms or your use of our website shall be subject to the exclusive jurisdiction of the courts of Kuwait.`
}, {
  title: "9. Contact Information",
  content: `If you have questions about these Terms and Conditions, please contact us:

Company: ${COMPANY_NAME}
Address: ${NAP.address.streetAddress}, ${NAP.address.addressLocality}, Kuwait
Email: ${NAP.email}
Phone: ${NAP.telephone1}`
}];
function TermsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-primary-dark pt-36 pb-16 text-white md:pt-48 md:pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blueprint-grid opacity-20", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Breadcrumb", className: "mb-6 flex items-center gap-2 text-xs text-white/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-white/80", children: "Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70", children: "Terms and Conditions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-white! md:text-4xl", children: "Terms and Conditions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/65 text-sm", children: "Last updated: 1 June 2026" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 max-w-2xl text-white/75 leading-relaxed", children: [
          "These Terms and Conditions govern your use of the ",
          COMPANY_NAME,
          " website and the basis on which we provide information about our construction and contracting services in Kuwait. Please read them carefully before using our website."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: SECTIONS.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: section.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 whitespace-pre-line text-muted-foreground leading-relaxed text-sm", children: section.content })
      ] }, section.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap gap-6 border-t border-border pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-sm font-medium text-primary hover:text-accent", children: "← Return to Homepage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy-policy", className: "text-sm font-medium text-muted-foreground hover:text-primary", children: "Privacy Policy" })
      ] })
    ] }) })
  ] });
}
export {
  TermsPage as component
};
