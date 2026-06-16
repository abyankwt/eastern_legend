import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Building2, Phone, Linkedin, Instagram, Facebook } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services/", label: "Services" },
  { to: "/quality-safety", label: "Quality & Safety" },
  { to: "/clients", label: "Clients" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;


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
            <div className="hidden items-center gap-1.5 sm:flex">
              <Building2 size={11} className="shrink-0 text-accent" />
              <span>Eastern Legend Building Construction Co. W.L.L</span>
            </div>
            <div className="hidden h-3 w-px bg-white/30 sm:block" />
            <a
              href="tel:+96565646413"
              className="flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Phone size={11} className="shrink-0 text-accent" />
              <span>+965 6564 6413</span>
            </a>
            <div className="hidden h-3 w-px bg-white/30 sm:block" />
            <a
              href="tel:+96566935287"
              className="hidden items-center gap-1.5 transition-colors hover:text-accent sm:flex"
            >
              <Phone size={11} className="shrink-0 text-accent" />
              <span>+965 6693 5287</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3.5">
            <a
              href="https://www.linkedin.com/company/easternlegendkw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white transition-colors hover:text-[#0A66C2]"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://www.instagram.com/easternlegendkw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white transition-colors hover:text-[#E1306C]"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://www.facebook.com/easternlegendkw/"
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
                scrolled || open ? "" : "brightness-0 invert"
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
