import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients — Eastern Legend Building Construction Co. W.L.L." },
      { name: "description", content: "Trusted by leading organizations across Kuwait — including Kuwait Oil Company, ACICO Group, NBK, STC, Huawei, Alshaya Group, and more." },
      { property: "og:title", content: "Our Clients" },
      { property: "og:description", content: "Leading organizations across Kuwait that trust Eastern Legend." },
      { property: "og:url", content: "/clients" },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
  component: ClientsPage,
});

const CLIENTS = [
  "Kuwait Oil Company", "ACICO Group", "Boubyan Gases Manufacturing Co.",
  "Dar Al Saha Polyclinic", "Kuwait Catalyst Company", "Huawei",
  "Wajda", "STC", "NBK", "FDH JV", "Alshaya Group", "Alghanim Industries",
];

function ClientsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Clients"
        title="Trusted by Leading Organizations"
        subtitle="We are proud to have worked with leading organizations across Kuwait, supporting projects with reliable construction, technical, and operational services."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
            {CLIENTS.map((c, i) => (
              <Reveal key={c} delay={i * 40}>
                <div className="group flex h-32 items-center justify-center bg-surface px-6 text-center transition-colors hover:bg-muted">
                  <span className="font-display text-base font-semibold tracking-tight text-muted-foreground transition-colors group-hover:text-primary md:text-lg">
                    {c}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
