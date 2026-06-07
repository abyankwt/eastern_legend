import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFab } from "./WhatsAppFab";
import { Toaster } from "@/components/ui/sonner";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppFab />
      <Toaster position="top-right" />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-dark pt-36 pb-24 text-white md:pt-48 md:pb-32">
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
      {/* Right diagonal accent panel */}
      <div
        className="absolute right-0 top-0 h-full w-1/3 -skew-x-6 bg-accent/5 origin-top-right"
        aria-hidden
      />
      {/* Bottom accent line */}
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden
      />
      {/* Subtle vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-dark/60 to-transparent"
        aria-hidden
      />

      <div className="container-page relative">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-accent" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {eyebrow}
          </span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] !text-white text-balance md:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
