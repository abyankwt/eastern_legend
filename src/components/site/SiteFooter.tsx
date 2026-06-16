import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Smartphone, ArrowRight } from "lucide-react";

const QUICK = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services/", label: "Services" },
  { to: "/quality-safety", label: "Quality & Safety" },
  { to: "/clients", label: "Our Clients" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

const SERVICES = [
  { slug: "general-contracting-kuwait", label: "General Contracting" },
  { slug: "building-contracting-kuwait", label: "Building Contracting" },
  { slug: "mep-contracting-kuwait", label: "MEP Contracting" },
  { slug: "mep-fitout-interior-design-kuwait", label: "MEP Fit-out & Interior" },
  { slug: "blasting-painting-kuwait", label: "Blasting & Painting" },
  { slug: "site-office-facilities-kuwait", label: "Site Office Facilities" },
  { slug: "rental-services-kuwait", label: "Rental Services" },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-primary-dark text-white/75">
      <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />

      {/* CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-5 py-9 md:flex-row">
          <div>
            <p className="font-display text-lg font-bold text-white!">
              Ready to start your next project?
            </p>
            <p className="mt-1 text-sm text-white/55">
              Contact our team for construction and contracting solutions across Kuwait.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition hover:bg-white"
          >
            Request a Quote <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-page relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <img
            src="/logo.png"
            alt="Eastern Legend Building Construction"
            width={80}
            height={80}
            className="h-20 w-20 rounded-md bg-white object-contain p-2"
          />
          <p className="mt-4 text-sm font-semibold text-white!/90 leading-snug">
            Eastern Legend Building Construction Co. W.L.L.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/50">
            Kuwait-based construction and contracting company delivering reliable, quality-driven
            solutions from planning to completion.
          </p>
          <p className="mt-5 text-[11px] font-medium text-white/35 uppercase tracking-wider">
            www.easternlegendkw.com
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white!">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {QUICK.map((q) => (
              <li key={q.to}>
                <Link to={q.to} className="transition-colors hover:text-accent">
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white!">
            Services
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-white/55 transition-colors hover:text-accent"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-white!">
            Contact
          </h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-white/55 leading-relaxed">
                Block 11, Mekka Street, Building 6659, Floor 1, Office No. 4, Fahaheel, Kuwait.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Smartphone size={15} className="shrink-0 text-accent" />
              <a href="tel:+96566935287" className="hover:text-accent transition-colors">
                +965 6693 5287
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="shrink-0 text-accent" />
              <a href="tel:+96565646413" className="hover:text-accent transition-colors">
                +965 6564 6413
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="shrink-0 text-accent" />
              <a
                href="mailto:info@easternlegendkw.com"
                className="text-[13px] hover:text-accent transition-colors"
              >
                info@easternlegendkw.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/35 md:flex-row">
          <p>
            © {new Date().getFullYear()} Eastern Legend Building Construction Co. W.L.L. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span>Building Construction & Contracting · Fahaheel, Kuwait</span>
            <Link to="/privacy-policy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
