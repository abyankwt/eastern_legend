import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/constants";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Construction Blog — Kuwait Building & Contracting Insights | Eastern Legend" },
      {
        name: "description",
        content:
          "Expert insights on construction, MEP contracting, project management, and building industry trends in Kuwait from Eastern Legend Building Construction Co. W.L.L.",
      },
      { property: "og:title", content: "Construction Blog | Eastern Legend" },
      {
        property: "og:description",
        content:
          "Expert insights on construction, MEP contracting, and project management in Kuwait.",
      },
      { property: "og:url", content: `${SITE_URL}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          generateBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
          ]),
        ),
      },
    ],
  }),
  component: BlogIndexPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogIndexPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Construction Insights from Kuwait's Building Industry"
        subtitle="Expert guides, technical explainers, and practical advice for developers, project owners, and construction professionals in Kuwait."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="container-page">
          {/* Featured post */}
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: BLOG_POSTS[0].slug }}
              className="group mb-12 grid items-center gap-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all hover:border-accent/40 hover:shadow-elevated lg:grid-cols-2"
            >
              <div className="aspect-video overflow-hidden bg-primary">
                <div className="flex h-full w-full items-center justify-center blueprint-grid">
                  <div className="text-center p-8">
                    <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                      {BLOG_POSTS[0].category}
                    </span>
                    <p className="mt-4 text-2xl font-bold text-white leading-snug max-w-xs mx-auto text-balance">
                      {BLOG_POSTS[0].title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {BLOG_POSTS[0].category}
                </span>
                <h2 className="mt-4 text-2xl font-bold leading-snug group-hover:text-accent transition-colors md:text-3xl">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {BLOG_POSTS[0].excerpt}
                </p>
                <div className="mt-6 flex items-center gap-5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {formatDate(BLOG_POSTS[0].publishDate)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} />
                    {BLOG_POSTS[0].readingTime} min read
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  Read article <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Other posts grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {BLOG_POSTS.slice(1).map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated"
                >
                  <div className="aspect-video bg-primary blueprint-grid flex items-center justify-center p-6">
                    <p className="text-center text-lg font-bold text-white leading-snug text-balance">
                      {post.title}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="inline-block self-start rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                      {post.category}
                    </span>
                    <h3 className="mt-4 text-lg font-bold leading-snug group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock size={12} />
                        {post.readingTime} min read
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal>
            <div className="mt-16 rounded-xl border border-border bg-muted/40 p-8 text-center md:p-12">
              <h3 className="text-2xl font-bold">Have a project to discuss?</h3>
              <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
                Our team of construction specialists is available to advise on your Kuwait project —
                from pre-construction through to handover.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Contact Our Team <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services/"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-muted"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
