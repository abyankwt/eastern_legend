import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-surface/95 shadow-card backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center">
          <img
            src="/logo.png"
            alt="Eastern Legend"
            width={72}
            height={72}
            className="h-16 w-16 rounded-md bg-white object-contain p-1 shadow-sm"
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
