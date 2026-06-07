# SEO Implementation Guide

## Eastern Legend Building Construction Co. W.L.L. — easternlegendkw.com

---

## Overview

This document covers the complete SEO foundation implemented for Eastern Legend's corporate website. The site is built on **TanStack Start** (React Router v7, Vite, Bun), not Next.js — all SEO outcomes are fully equivalent and the technical implementation follows TanStack Start's APIs.

---

## 1. File Structure — What Was Built

```
src/
  lib/
    seo/
      constants.ts        — Central NAP data, site URL, service areas
      schema.ts           — JSON-LD schema generators (Organization, Service, Breadcrumb, FAQ, Blog)
    services-data.ts      — Full content for all 13 service pages (700–1200 words each)
    blog-data.ts          — Full content for 5 blog posts
  routes/
    services/
      index.tsx           — Services listing page (/services)
      $slug.tsx           — Dynamic service detail pages (/services/[slug])
    blog/
      index.tsx           — Blog index page (/blog)
      $slug.tsx           — Blog post pages (/blog/[slug])
    privacy-policy.tsx    — Privacy Policy page
    terms-and-conditions.tsx — Terms & Conditions page
    __root.tsx            — Updated with full Organization + LocalBusiness JSON-LD
public/
  robots.txt              — Search engine crawl rules + sitemap pointer
  sitemap.xml             — Static sitemap with all 30 URLs, priorities, and lastmod
SEO_IMPLEMENTATION_GUIDE.md — This document
```

---

## 2. JSON-LD Structured Data

### Global Schema (injected on every page via `__root.tsx`)

The root schema uses `@graph` with two nodes:

- **Organization + GeneralContractor + LocalBusiness** (`@id: /#organization`)
  - Full NAP (name, address, phone, email)
  - Area served: Fahaheel, Ahmadi, Kuwait City, Hawally, Farwaniya, Mubarak Al-Kabeer, Jahra
  - Opening hours: Sun–Thu 08:00–17:00
  - `hasOfferCatalog` listing all 9 service categories

- **WebSite** (`@id: /#website`)
  - Publisher link to organization node
  - SearchAction for potential rich results

### Per-Page Schema

| Page Type      | Schema Types Injected                  |
| -------------- | -------------------------------------- |
| Service detail | Service + BreadcrumbList + FAQPage     |
| Blog post      | BlogPosting + BreadcrumbList + FAQPage |
| Services index | BreadcrumbList + WebPage               |
| Homepage       | (global schema covers this)            |

---

## 3. Service Pages — 13 Individual Pages

Each service has a dedicated page at `/services/[slug]` with:

- Unique H1 targeting primary keyword
- 700–1,200 words of original content
- "What's Included" sidebar with 8–10 scope items
- 2–3 content sections (Why It Matters, Our Approach, Specific Details)
- Industries served grid
- Kuwait service areas
- 3–5 FAQs (also injected as FAQPage schema for rich results)
- Related services internal links
- CTA with Quote, WhatsApp, and Call buttons

### Service Slugs

| Slug                                | Primary Keyword Target                   |
| ----------------------------------- | ---------------------------------------- |
| `general-contracting-kuwait`        | general contracting company Kuwait       |
| `building-contracting-kuwait`       | building contractor Kuwait               |
| `mep-contracting-kuwait`            | MEP contracting company Kuwait           |
| `mep-fitout-interior-design-kuwait` | MEP fit-out Kuwait / interior fit-out    |
| `blasting-painting-kuwait`          | blasting and painting Kuwait             |
| `site-office-facilities-kuwait`     | site office facilities Kuwait            |
| `rental-services-kuwait`            | construction equipment rental Kuwait     |
| `project-management-kuwait`         | construction project management Kuwait   |
| `renovations-additions-kuwait`      | renovation contractor Kuwait             |
| `technical-consulting-kuwait`       | construction technical consulting Kuwait |
| `pre-construction-services-kuwait`  | pre-construction services Kuwait         |
| `safety-compliance-kuwait`          | construction safety compliance Kuwait    |
| `design-build-services-kuwait`      | design-build contractor Kuwait           |

---

## 4. Blog Content — 5 Posts

| Slug                                                 | Primary Keyword                  |
| ---------------------------------------------------- | -------------------------------- |
| `how-to-choose-construction-company-kuwait`          | best construction company Kuwait |
| `importance-of-mep-contracting-in-building-projects` | MEP contracting importance       |
| `quality-and-safety-in-kuwait-construction-projects` | construction safety Kuwait       |
| `general-contracting-vs-building-contracting-kuwait` | general vs building contracting  |
| `pre-construction-planning-for-successful-projects`  | pre-construction planning Kuwait |

Each post includes: sections with headings, bullet lists, FAQs, sidebar CTA, related services links.

---

## 5. Technical SEO Checklist

### Implemented ✅

- [x] Canonical URLs on every page
- [x] Unique `<title>` tags (60–65 chars) on every page
- [x] Unique meta descriptions (150–160 chars) on every page
- [x] OG title + description on every page
- [x] JSON-LD Organization + LocalBusiness schema (global)
- [x] JSON-LD Service schema per service page
- [x] JSON-LD BreadcrumbList per service/blog page
- [x] JSON-LD FAQPage per service/blog page
- [x] JSON-LD BlogPosting per blog post
- [x] `robots.txt` with sitemap pointer
- [x] `sitemap.xml` with 30 URLs, priorities, and lastmod
- [x] Privacy Policy page
- [x] Terms & Conditions page
- [x] Breadcrumb navigation UI (visible + schema)
- [x] Internal linking (service pages link to related services; blog links to services)
- [x] Footer links to Privacy Policy and Terms
- [x] Footer services links to individual service pages
- [x] Blog link added to site header navigation
- [x] `lang="en"` on `<html>` element

### Pending / Recommended Next Steps

- [ ] **Google Search Console** — Verify site ownership, submit sitemap
- [ ] **Google Analytics 4** — Add GA4 measurement ID to `__root.tsx`
- [ ] **Google Tag Manager** — Optional: add GTM container for tag management
- [ ] **OG Image** — Create a branded 1200×630px `og-image.jpg` in `/public/`
- [ ] **Favicon** — Add `favicon.ico`, `apple-touch-icon.png` in `/public/`
- [ ] **Actual project photography** — Replace placeholder images with real project photos
- [ ] **Google Business Profile** — Claim and verify at google.com/business
- [ ] **NAP citations** — Submit business details to Kuwait directories and Arab directories
- [ ] **Backlinks** — See Backlink Strategy section below

---

## 6. Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://www.easternlegendkw.com`
3. Verify using HTML file method (place verification file in `/public/`)
4. After verification, go to **Sitemaps** and submit: `https://www.easternlegendkw.com/sitemap.xml`
5. Monitor **Coverage** for indexing issues and **Performance** for keyword rankings

---

## 7. Google Analytics 4 Setup

Add this to the `head` array in `src/routes/__root.tsx`:

```typescript
// In head() function, add to links array:
{
  rel: "preconnect",
  href: "https://www.googletagmanager.com"
},

// Add these scripts to the scripts array:
{
  src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX",
  async: true,
},
{
  children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');`,
},
```

Replace `G-XXXXXXXXXX` with your GA4 Measurement ID from Google Analytics.

---

## 8. Local SEO — Kuwait-Specific Actions

### Google Business Profile

1. Go to [business.google.com](https://business.google.com)
2. Search for "Eastern Legend Building Construction" — claim if it exists, or create new
3. Category: **General Contractor** (primary) + Building Materials Supplier, MEP Contractor
4. Add address: Block 11, Mekka Street, Building 6659, Floor 1, Office No. 4, Fahaheel, Ahmadi, Kuwait
5. Add phone: +965 6693 5287
6. Add website: https://www.easternlegendkw.com
7. Add services matching the 13 service pages
8. Upload project photos (minimum 10 photos recommended)
9. Set business hours: Sun–Thu 8:00 AM – 5:00 PM

### NAP Citations (Business Directories)

Submit consistent NAP (Name, Address, Phone) to:

- Yellow Pages Kuwait (yellowpageskuwait.com)
- Kuwait Finder (kuwaitfinder.net)
- Yelp (yelp.com)
- Foursquare / Swarm
- Hotfrog (hotfrog.com)
- Cylex (cylex.com)
- Arab Business Directory
- Gulf Directory

---

## 9. Backlink Strategy (6-Month Plan)

### Month 1–2: Foundation

- **Supplier/partner links** — Request a link from any material suppliers, MEP equipment suppliers, or subcontractors you work with who have websites
- **Industry association listings** — Kuwait Engineering Society, Federation of GCC Chambers
- **Google Business Profile** — Ensure completed and verified (generates local signals)

### Month 3–4: Content Outreach

- **Guest posts** — Approach Kuwait construction/real estate publications and blogs with articles on construction topics
- **PR outreach** — Issue press releases for major project completions via Kuwait wire services
- **LinkedIn** — Publish articles linking back to the blog posts and service pages

### Month 5–6: Authority Building

- **Client testimonial pages** — Ask satisfied clients if they will add a case study or mention on their website with a link
- **Subcontractor ecosystem** — If you have subcontractors with websites, exchange links in a relevant editorial context
- **Arabic language content** — Consider adding Arabic versions of key service pages for Arabic search queries (huge opportunity in Kuwait)

---

## 10. Keyword Targets by Priority

### Tier 1 — Highest Priority (commercial intent, local)

- "construction company in Kuwait"
- "general contractor Kuwait"
- "building contractor Kuwait"
- "MEP contractor Kuwait"
- "construction company Fahaheel"
- "construction company Ahmadi"

### Tier 2 — Service-Specific

- "MEP fit out company Kuwait"
- "blasting and painting Kuwait"
- "pre construction services Kuwait"
- "design build contractor Kuwait"
- "project management construction Kuwait"

### Tier 3 — Blog / Informational

- "how to choose construction company Kuwait"
- "MEP contracting Kuwait guide"
- "general contracting vs building contracting"
- "pre-construction planning Kuwait"

---

## 11. Updating the Sitemap

When adding new pages (new blog posts, new service pages, etc.), update `public/sitemap.xml` by adding a new `<url>` block following the existing pattern. For dynamic content, consider implementing a server-side sitemap route in the future using TanStack Start's server routes.

---

## 12. Adding New Service Pages

To add a new service page:

1. Add a new `ServicePage` object to `src/lib/services-data.ts` following the existing pattern
2. The dynamic route `src/routes/services/$slug.tsx` automatically handles all slugs in the `SERVICES` array
3. Add the new URL to `public/sitemap.xml`
4. Add the service to the footer `SERVICES` array in `src/components/site/SiteFooter.tsx`
5. Update the services listing page in `src/routes/services/index.tsx` if needed

---

## 13. Adding New Blog Posts

To add a new blog post:

1. Add a new `BlogPost` object to `src/lib/blog-data.ts` following the existing pattern
2. The dynamic route `src/routes/blog/$slug.tsx` automatically handles all slugs in `BLOG_POSTS`
3. Add the new URL to `public/sitemap.xml`
4. The blog index page (`src/routes/blog/index.tsx`) automatically lists all posts

---

_This guide should be reviewed and updated quarterly as the site grows and SEO priorities evolve._
