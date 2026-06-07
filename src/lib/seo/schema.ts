import { SITE_URL, COMPANY_NAME, NAP, SERVICE_AREAS } from "./constants";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "GeneralContractor", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY_NAME,
        legalName: COMPANY_NAME,
        url: SITE_URL,
        email: NAP.email,
        telephone: [NAP.telephone1, NAP.telephone2],
        sameAs: [],
        address: {
          "@type": "PostalAddress",
          streetAddress: NAP.address.streetAddress,
          addressLocality: NAP.address.addressLocality,
          addressRegion: NAP.address.addressRegion,
          addressCountry: NAP.address.addressCountry,
        },
        areaServed: SERVICE_AREAS.map((area) => ({ "@type": "City", name: area })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "08:00",
            closes: "17:00",
          },
        ],
        knowsAbout: [
          "General Contracting",
          "Building Contracting",
          "MEP Contracting",
          "Construction Project Management",
          "MEP Fit-out",
          "Blasting and Painting",
          "Building Construction Kuwait",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: COMPANY_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/services?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface FAQItem {
  q: string;
  a: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export interface ServiceSchemaInput {
  slug: string;
  title: string;
  metaDescription: string;
}

export function generateServiceSchema(service: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: SERVICE_AREAS.map((area) => ({ "@type": "City", name: area })),
    serviceType: service.title,
  };
}

export interface WebPageSchemaInput {
  title: string;
  description: string;
  url: string;
}

export function generateWebPageSchema(page: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${page.url}#webpage`,
    url: page.url,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };
}

export interface BlogPostSchemaInput {
  slug: string;
  title: string;
  metaDescription: string;
  publishDate: string;
}

export function generateBlogPostSchema(post: BlogPostSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}#blogpost`,
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}
