import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, Phone, MapPin, Smartphone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eastern Legend Building Construction Co. W.L.L." },
      { name: "description", content: "Contact Eastern Legend Building Construction Co. W.L.L. in Fahaheel, Kuwait. Call, email, or send an inquiry for construction and contracting projects." },
      { property: "og:title", content: "Contact Eastern Legend" },
      { property: "og:description", content: "Get in touch with our team for construction, MEP, and fit-out projects across Kuwait." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

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
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">Eastern Legend Building Construction Co. W.L.L.</h2>
                <p className="mt-3 text-muted-foreground">Reach our office in Fahaheel, Kuwait — or send an inquiry and we will get back to you.</p>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 text-accent shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Office</div>
                    <div className="text-muted-foreground">Block 11, Mekka Street, Building 6659, Floor 1, Office No. 4, Fahaheel, Kuwait.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Smartphone size={20} className="mt-0.5 text-accent shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Mobile</div>
                    <a href="tel:+96566935287" className="text-muted-foreground hover:text-accent">+965 6693 5287</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="mt-0.5 text-accent shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Telephone</div>
                    <a href="tel:+96565646413" className="text-muted-foreground hover:text-accent">+965 6564 6413</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={20} className="mt-0.5 text-accent shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a href="mailto:info@easternlegendkw.com" className="text-muted-foreground hover:text-accent">info@easternlegendkw.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="mt-0.5 text-accent shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Working Hours</div>
                    <div className="text-muted-foreground">Sunday – Thursday · 8:00 AM – 5:00 PM</div>
                  </div>
                </li>
              </ul>

              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Eastern Legend office location"
                  src="https://www.google.com/maps?q=Fahaheel,+Kuwait&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-xl border border-border bg-surface p-6 shadow-card md:p-8">
              <h3 className="text-xl font-bold">Send an Inquiry</h3>
              <p className="mt-1 text-sm text-muted-foreground">All fields marked are required. We typically respond within one business day.</p>
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
