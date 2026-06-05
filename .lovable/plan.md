
## Eastern Legend Construction — Website Plan

A premium, engineering-focused corporate site built on the existing TanStack Start + Tailwind v4 stack. Seven routes, shared header/footer, brand tokens wired into the design system, and realistic construction imagery generated for hero/section visuals.

### Brand & Design System (src/styles.css)
Wire the provided palette as semantic tokens (oklch equivalents):
- `--primary` Deep Navy `#073B66`
- `--accent` Teal `#2CA7B8`
- `--secondary` Steel Blue `#1F6F8B`
- `--background` `#F5F8FA` / White surfaces
- `--foreground` `#1D2939`, `--muted-foreground` `#667085`
- `--gold` `#C9A15A` (sparingly used)
- Gradients: `--gradient-hero` (navy overlay), `--gradient-accent` (navy→teal)
- Shadows: `--shadow-card`, `--shadow-elevated`

Typography via `<link>` in `__root.tsx`:
- Headings: Montserrat (700/800)
- Body: Inter (400/500/600)
Register `--font-display` / `--font-sans` in `@theme`.

Subtle blueprint motif: a reusable `BlueprintGrid` background component (faint SVG grid lines + diagonal architectural strokes) used on hero, CTA, and dark sections.

### Routes (src/routes/)
1. `index.tsx` — Home
2. `about.tsx`
3. `services.tsx`
4. `quality-safety.tsx`
5. `clients.tsx`
6. `projects.tsx`
7. `contact.tsx`

Each route defines its own `head()` (title, description, og:title, og:description). Root sets viewport/og:type/site name only — no canonical, no og:image at root.

### Shared Components (src/components/)
- `SiteHeader.tsx` — sticky, transparent→solid on scroll, logo + nav + "Request a Quote" CTA, mobile hamburger (Sheet)
- `SiteFooter.tsx` — dark navy, 4 columns + copyright
- `WhatsAppFab.tsx` — floating WhatsApp button → `https://wa.me/96566935287`
- `BlueprintGrid.tsx` — SVG decorative background
- `SectionHeading.tsx` — eyebrow + title + subtitle pattern
- `ServiceCard.tsx`, `FeatureBlock.tsx`, `TrustBadge.tsx`, `ClientLogoCard.tsx`, `ProjectCard.tsx`
- `ContactForm.tsx` — react-hook-form + zod, toast on success (frontend-only, no backend)
- `RevealOnScroll.tsx` — IntersectionObserver fade/translate util

### Home page sections
Implements all 12 sections from the spec: Header, Hero (with 3 trust badges + dual CTA), About preview, 7 Core Services grid, 6 Commercial & Technical Services, Quality & Safety (dark navy), Clients logo grid (text-cards, grayscale styling), Projects (6 category cards), Why Choose Us (image + bullets), CTA band, Contact form + details + embedded Google Map iframe (Fahaheel), Footer.

### Other pages
- **About**: intro, who we are, mission, vision, 7 values grid, project approach, engineering ops, client commitment
- **Services**: deep section per service (7 core + commercial block), anchor links from nav
- **Quality & Safety**: process pillars, certified materials, inspections, training, compliance
- **Clients**: intro copy + full grid of 12 client name cards
- **Projects**: filter chips (All/Residential/Commercial/Industrial/MEP/Fit-out/Site Facilities) with client-side filtering over placeholder cards
- **Contact**: full form, contact block, working hours placeholder, Google Maps iframe

### Imagery (generated via imagegen, stored in src/assets/)
- `hero-kuwait-skyline.jpg` — Kuwait skyline at dusk, construction crane silhouette, cinematic, dark blue tone
- `engineers-onsite.jpg` — engineers with hard hats reviewing plans on site
- `quality-safety.jpg` — worker inspection, PPE, industrial
- `why-choose-us.jpg` — high-rise construction progress
- `cta-band.jpg` — wide construction site banner
- 6 project category images (residential, commercial, industrial, MEP, fit-out, site-facilities)
- Logo: copy the uploaded Eastern Legend logo via lovable-assets and import into header/footer

### SEO
Per-route `head()` with titles like "About — Eastern Legend Building Construction Co. W.L.L." Home uses the exact title/description from the spec. Relative `og:url`, leaf-only `<link rel="canonical">`. Organization JSON-LD in root with name, address, phone, email, url.

### Animation
- Hero text: staggered fade-up on mount (CSS keyframes)
- Service/Project cards: lift + shadow on hover (Tailwind transitions)
- Section reveals: IntersectionObserver-driven opacity+translate
- Blueprint divider lines: slow draw-in via SVG stroke-dasharray animation
No heavy libraries — pure CSS + a tiny reveal hook.

### Functional notes
- Contact form is frontend-only; submitting shows a success toast (sonner already available). No backend/Lovable Cloud unless the user later asks for real submission delivery.
- WhatsApp FAB visible on all pages.
- Fully responsive (mobile-first, breakpoints at md/lg).
- All "Request a Quote" buttons link to `/contact`.

### Technical details
- No new dependencies needed beyond what's installed (shadcn, react-hook-form, zod, sonner, lucide-react all present).
- Fonts loaded via `<link>` in `__root.tsx` head (preconnect + Google Fonts stylesheet).
- Map = plain `<iframe>` Google Maps embed (no API key required).
- All colors via semantic tokens; no hardcoded hex in components.
- Replace placeholder `src/routes/index.tsx` content entirely.

### Out of scope (can add later if requested)
- Real backend for contact form (would need Lovable Cloud)
- CMS for projects
- Real client logo images (using styled text cards until provided)
- Arabic / RTL version
