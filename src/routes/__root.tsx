import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Eastern Legend Building Construction Co. W.L.L. | Construction & Contracting Company in Kuwait",
      },
      {
        name: "description",
        content:
          "Kuwait-based construction and contracting company providing building construction, MEP contracting, fit-out, blasting and painting, site office facilities, rental services, project management, and technical consulting.",
      },
      { name: "author", content: "Eastern Legend Building Construction Co. W.L.L." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Eastern Legend Building Construction Co. W.L.L." },
      {
        property: "og:title",
        content:
          "Eastern Legend Building Construction Co. W.L.L. | Construction & Contracting Company in Kuwait",
      },
      {
        property: "og:description",
        content:
          "Kuwait-based construction and contracting company providing building construction, MEP contracting, fit-out, blasting and painting, site office facilities, rental services, project management, and technical consulting.",
      },
      { property: "og:url", content: "https://www.easternlegendkw.com" },
      { property: "og:image", content: "https://www.easternlegendkw.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Eastern Legend Building Construction Co. W.L.L. — Kuwait",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Eastern Legend Building Construction Co. W.L.L. | Construction & Contracting Company in Kuwait",
      },
      {
        name: "twitter:description",
        content:
          "Kuwait-based construction and contracting company providing building construction, MEP contracting, fit-out, blasting and painting, and more.",
      },
      { name: "twitter:image", content: "https://www.easternlegendkw.com/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "GeneralContractor", "LocalBusiness"],
              "@id": "https://www.easternlegendkw.com/#organization",
              name: "Eastern Legend Building Construction Co. W.L.L.",
              legalName: "Eastern Legend Building Construction Co. W.L.L.",
              url: "https://www.easternlegendkw.com",
              email: "info@easternlegendkw.com",
              telephone: ["+96566935287", "+96565646413"],
              sameAs: [],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Block 11, Mekka Street, Building 6659, Floor 1, Office No. 4",
                addressLocality: "Fahaheel",
                addressRegion: "Ahmadi",
                addressCountry: "KW",
              },
              areaServed: [
                { "@type": "City", name: "Fahaheel" },
                { "@type": "City", name: "Ahmadi" },
                { "@type": "City", name: "Kuwait City" },
                { "@type": "City", name: "Hawally" },
                { "@type": "City", name: "Farwaniya" },
                { "@type": "City", name: "Mubarak Al-Kabeer" },
                { "@type": "City", name: "Jahra" },
                { "@type": "Country", name: "Kuwait" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Construction & Contracting Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "General Contracting" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Building Contracting" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "MEP Contracting" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "MEP Fit-out & Interior Design" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Blasting & Painting" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Site Office Facilities" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Rental Services" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Project Management" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Design-Build Services" },
                  },
                ],
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.easternlegendkw.com/#website",
              url: "https://www.easternlegendkw.com",
              name: "Eastern Legend Building Construction Co. W.L.L.",
              publisher: { "@id": "https://www.easternlegendkw.com/#organization" },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
