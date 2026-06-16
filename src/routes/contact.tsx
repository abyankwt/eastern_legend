import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, Phone, MapPin, Smartphone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eastern Legend Building Construction Co. W.L.L." },
      {
        name: "description",
        content:
          "Contact Eastern Legend Building Construction Co. W.L.L. in Fahaheel, Kuwait. Call, email, or send an inquiry for construction and contracting projects.",
      },
      { property: "og:title", content: "Contact Eastern Legend" },
      {
        property: "og:description",
        content:
          "Get in touch with our team for construction, MEP, and fit-out projects across Kuwait.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function WaIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.16c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.15-.47-.27z" />
    </svg>
  );
}

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Lasting Together"
        subtitle="Share your project details and our team will respond with the right scope, approach, and next steps."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Eastern Legend Building Construction Co. W.L.L.
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Reach our office in Fahaheel, Kuwait — or send an inquiry and we will respond
                  within one business day.
                </p>
              </div>

              {/* Quick actions */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/96566935287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fb855]"
                >
                  <WaIcon className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+96566935287"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-primary hover:bg-muted"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>

              {/* Contact details */}
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <div className="font-semibold text-foreground">Office Address</div>
                    <div className="mt-0.5 text-muted-foreground">
                      Block 11, Mekka Street, Building 6659, Floor 1, Office No. 4, Fahaheel,
                      Kuwait.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Smartphone size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <div className="font-semibold text-foreground">Mobile</div>
                    <a
                      href="tel:+96566935287"
                      className="mt-0.5 text-muted-foreground hover:text-accent"
                    >
                      +965 6693 5287
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <div className="font-semibold text-foreground">Telephone</div>
                    <a
                      href="tel:+96565646413"
                      className="mt-0.5 text-muted-foreground hover:text-accent"
                    >
                      +965 6564 6413
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a
                      href="mailto:info@easternlegendkw.com"
                      className="mt-0.5 text-muted-foreground hover:text-accent"
                    >
                      info@easternlegendkw.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <div className="font-semibold text-foreground">Working Hours</div>
                    <div className="mt-0.5 text-muted-foreground">
                      Sunday – Thursday · 8:00 AM – 5:00 PM
                    </div>
                  </div>
                </li>
              </ul>

              {/* Map */}
              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Eastern Legend office location in Fahaheel, Kuwait"
                  src="https://www.google.com/maps?q=29.080019654369558,48.1349583642129&output=embed"
                  width="100%"
                  height="300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>
            </div>
          </Reveal>

          {/* Inquiry form */}
          <Reveal delay={100}>
            <div className="rounded-xl border border-border bg-surface p-6 shadow-card md:p-8">
              <h3 className="text-xl font-bold">Send an Inquiry</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                All fields marked are required. We typically respond within one business day.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
