export function BlueprintGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <div className="absolute inset-0 blueprint-grid" />
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="120" x2="1200" y2="120" stroke="white" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="6 8" />
        <line x1="200" y1="0" x2="200" y2="600" stroke="white" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="6 8" />
        <line x1="1000" y1="0" x2="1000" y2="600" stroke="white" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="6 8" />
      </svg>
    </div>
  );
}
