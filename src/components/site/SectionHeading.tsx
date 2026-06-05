import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${a}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-accent" : "text-secondary"
          }`}
        >
          <span className={`h-px w-8 ${light ? "bg-accent" : "bg-secondary"}`} />
          {eyebrow}
        </div>
      )}
      <h2
        className={`mt-4 text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl ${
          light ? "!text-white" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            light ? "text-white/75" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
