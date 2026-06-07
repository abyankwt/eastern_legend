import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SITE_URL, COMPANY_NAME, NAP } from "@/lib/seo/constants";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${COMPANY_NAME}` },
      {
        name: "description",
        content: `Privacy Policy for ${COMPANY_NAME}. How we collect, use, and protect personal information on our website.`,
      },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy-policy` }],
  }),
  component: PrivacyPolicyPage,
});

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: `When you visit our website or submit an enquiry, we may collect the following personal information:

- Contact details you provide: name, email address, phone number, and company name when you submit a contact form or make an enquiry.
- Usage data: IP address, browser type, pages visited, and time spent on pages, collected automatically through cookies and analytics tools.
- Communications: records of messages and emails you send to us.

We do not collect sensitive personal data such as financial information, health data, or government identification numbers through our website.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the personal information we collect to:

- Respond to your enquiries and provide the construction and contracting services you request.
- Provide information about our services, projects, and capabilities that may be relevant to your needs.
- Improve our website, services, and business operations.
- Comply with legal obligations applicable to our business in Kuwait.

We do not sell, rent, or share your personal information with third parties for their marketing purposes.`,
  },
  {
    title: "3. Cookies and Analytics",
    content: `Our website uses cookies — small text files stored on your device — to improve your browsing experience and understand how visitors use our website. Cookies we use may include:

- Essential cookies: required for the website to function correctly.
- Analytics cookies: used to understand aggregate website usage through tools such as Google Analytics.

You can control cookie settings through your browser. Disabling cookies may affect some website functionality.`,
  },
  {
    title: "4. Data Retention",
    content: `We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including responding to enquiries, providing services, and meeting legal and contractual obligations. We will delete or anonymize personal information when it is no longer needed for these purposes.`,
  },
  {
    title: "5. Data Security",
    content: `We implement appropriate technical and organizational measures to protect personal information against unauthorized access, disclosure, alteration, or destruction. Our website uses HTTPS encryption for all data in transit. While we take reasonable precautions, no data transmission over the internet or storage system can be guaranteed as completely secure.`,
  },
  {
    title: "6. Third-Party Links",
    content: `Our website may contain links to third-party websites, including social media platforms and partner organizations. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: "7. Your Rights",
    content: `You have the right to:

- Access the personal information we hold about you.
- Request correction of inaccurate personal information.
- Request deletion of your personal information, subject to legal obligations that may require us to retain certain data.
- Object to or restrict the processing of your personal information in certain circumstances.

To exercise any of these rights, contact us using the details below.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The most current version will always be published on this page with the date of last update shown at the top of the policy.`,
  },
  {
    title: "9. Contact Us",
    content: `If you have questions about this Privacy Policy or how we handle your personal information, please contact us:

Company: ${COMPANY_NAME}
Address: ${NAP.address.streetAddress}, ${NAP.address.addressLocality}, Kuwait
Email: ${NAP.email}
Phone: ${NAP.telephone1}`,
  },
];

function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-primary-dark pt-36 pb-16 text-white md:pt-48 md:pb-20">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden />
        <div className="container-page relative max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs text-white/50"
          >
            <Link to="/" className="hover:text-white/80">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/70">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl font-bold text-white! md:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-white/65 text-sm">Last updated: 1 June 2026</p>
          <p className="mt-5 max-w-2xl text-white/75 leading-relaxed">
            {COMPANY_NAME} (&ldquo;Eastern Legend&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and protect personal information when you use our website at{" "}
            <span className="text-white/90">easternlegendkw.com</span>.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold">{section.title}</h2>
                <div className="mt-4 whitespace-pre-line text-muted-foreground leading-relaxed text-sm">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <Link to="/" className="text-sm font-medium text-primary hover:text-accent">
              ← Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
