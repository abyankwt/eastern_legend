import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone, Linkedin, Instagram, Facebook } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services/", label: "Services" },
  { to: "/quality-safety", label: "Quality & Safety" },
  { to: "/clients", label: "Clients" },
  { to: "/projects", label: "Projects" },
  { to: "/blog/", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top info bar — always dark */}
      <div className="bg-primary-dark/95 backdrop-blur-sm">
        <div className="container-page flex items-center justify-between py-2">
          {/* Location + phone */}
          <div className="flex items-center gap-4 text-[11px] text-white">
            <a
              href="https://maps.google.com/?q=Fahaheel,Ahmadi,Kuwait"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 transition-colors hover:text-accent sm:flex"
            >
              <MapPin size={11} className="shrink-0 text-accent" />
              <span>Fahaheel, Ahmadi, Kuwait</span>
            </a>
            <div className="hidden h-3 w-px bg-white/30 sm:block" />
            <a
              href="tel:+96566935287"
              className="flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Phone size={11} className="shrink-0 text-accent" />
              <span>+965 6693 5287</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3.5">
            <a
              href="https://wa.me/96566935287"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white transition-colors hover:text-[#25D366]"
            >
              <WhatsAppIcon size={14} />
            </a>
            {/* Update these hrefs with your actual social media profile URLs */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white transition-colors hover:text-[#0A66C2]"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white transition-colors hover:text-[#E1306C]"
            >
              <Instagram size={14} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white transition-colors hover:text-[#1877F2]"
            >
              <Facebook size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`transition-all duration-300 ${
          scrolled || open ? "bg-surface/95 shadow-card backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container-page flex h-24 items-center justify-between">
          <Link to="/" className="group flex items-center">
            <img
              src="/logo.png"
              alt="Eastern Legend"
              width={80}
              height={80}
              className={`h-20 w-20 object-contain transition-all duration-300 ${
                scrolled || open ? "" : "rounded-md bg-white p-1.5 shadow-sm"
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
                }`}
                activeProps={{
                  className: scrolled ? "!text-accent" : "!text-white font-semibold",
                }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/contact"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:bg-secondary hover:text-white hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-md lg:hidden ${
              scrolled || open ? "text-primary" : "text-white"
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-surface lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
                activeProps={{ className: "!text-accent !bg-muted" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-3 border-t border-border px-3 pt-3">
              <a
                href="tel:+96566935287"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent"
              >
                <Phone size={13} />
                <span>+965 6693 5287</span>
              </a>
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
