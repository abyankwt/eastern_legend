import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Smartphone } from "lucide-react";
import logo from "@/assets/eastern-legend-logo.png.asset.json";

const QUICK = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/quality-safety", label: "Quality & Safety" },
  { to: "/clients", label: "Clients" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

const SERVICES = [
  "General Contracting",
  "Building Contracting",
  "MEP Contracting",
  "MEP Fit-out & Interior",
  "Blasting & Painting",
  "Site Office Facilities",
  "Rental Services",
];

export function SiteFooter() {
  return (
    <footer className="relative bg-primary-dark text-white/80">
      <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Eastern Legend" width={44} height={44} className="h-11 w-11 bg-white/95 rounded-md p-1" />
            <div>
              <div className="font-display font-bold text-white">EASTERN LEGEND</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Building Construction Co. W.L.L.</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/65">
            Eastern Legend Building Construction Co. W.L.L. is a Kuwait-based
            contracting company delivering reliable construction, technical, MEP,
            fit-out, and project support solutions from planning to completion.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] !text-white">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {QUICK.map((q) => (
              <li key={q.to}>
                <Link to={q.to} className="hover:text-accent transition-colors">
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] !text-white">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s} className="text-white/70">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] !text-white">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>Block 11, Mekka Street, Building 6659, Floor 1, Office No. 4, Fahaheel, Kuwait.</span>
            </li>
            <li className="flex items-center gap-3">
              <Smartphone size={16} className="text-accent" />
              <a href="tel:+96566935287" className="hover:text-accent">+965 6693 5287</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent" />
              <a href="tel:+96565646413" className="hover:text-accent">+965 6564 6413</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent" />
              <a href="mailto:info@easternlegendkw.com" className="hover:text-accent">info@easternlegendkw.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 md:flex-row">
          <p>© {new Date().getFullYear()} Eastern Legend Building Construction Co. W.L.L. All rights reserved.</p>
          <p>www.easternlegendkw.com</p>
        </div>
      </div>
    </footer>
  );
}
