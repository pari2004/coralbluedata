import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, BarChart3, Video, FileText } from "lucide-react";
import { NavPageHero } from "@/components/site/NavPageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { formatDate } from "@/lib/utils";
import { listPublishedArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description: "Articles, guides and insights on B2B data quality, enrichment and go-to-market data.",
};

const RESOURCE_TYPES = [
  {
    icon: BookOpen,
    label: "Guides",
    description: "In-depth practical guides on B2B data strategy and go-to-market execution.",
    image: "/images/navigation/resources-research.webp",
    color: "from-coral-500/20 to-electric-500/10",
    textColor: "text-coral-600",
  },
  {
    icon: BarChart3,
    label: "Industry Reports",
    description: "Market intelligence reports and B2B data trend analysis for key sectors.",
    image: "/images/navigation/resources-reports.webp",
    color: "from-electric-500/20 to-cyan-400/10",
    textColor: "text-electric-600",
  },
  {
    icon: Video,
    label: "Webinars & Events",
    description: "On-demand sessions and live events on data-driven go-to-market tactics.",
    image: "/images/navigation/resources-webinars.webp",
    color: "from-cyan-400/20 to-coral-400/10",
    textColor: "text-cyan-600",
  },
];

const HERO_SLIDES = [
  { src: "/images/navigation/resources-hero.webp", alt: "Research and business intelligence workspace" },
  { src: "/images/navigation/resources-research.webp", alt: "Research and insights" },
  { src: "/images/navigation/resources-boardroom.webp", alt: "Team reviewing analytics in a boardroom" },
  { src: "/images/navigation/resources-analytics.svg", alt: "Floating analytics panels" },
  { src: "/images/navigation/resources-reports.webp", alt: "Industry reports" },
  { src: "/images/navigation/resources-webinars.webp", alt: "Webinars and events" },
];

export default async function ResourcesPage() {
  const articles = await listPublishedArticles();
  const [featured, ...rest] = articles;

  return (
    <>
      <NavPageHero
        eyebrow="Resources"
        title="Intelligence you can"
        titleHighlight="act on"
        description="Practical guides, industry reports, and expert insights on B2B data quality, enrichment, and go-to-market strategy. No fluff, just substance."
        primaryCta={{ label: "Browse resources", href: "#resources" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
        imageSrc="/images/navigation/resources-hero.webp"
        imageAlt="Corporate research and business intelligence workspace"
        images={HERO_SLIDES}
        accent="coral"
      />

      {/* Resource type cards */}
      <section className="section bg-white relative overflow-hidden">
        <div aria-hidden className="absolute right-0 top-0 h-80 w-80 rounded-full bg-coral-50 blur-[120px] opacity-40" />
        <div className="container relative">
          <Reveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">What&apos;s available</p>
            <h2 className="text-display-md text-ink-900">Resources for every stage of your journey</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {RESOURCE_TYPES.map((rt, i) => (
              <Reveal key={rt.label} delay={i * 80} className="group overflow-hidden rounded-2xl border border-mist-200 shadow-card hover:-translate-y-1 transition-all duration-300 hover:shadow-lift">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={rt.image}
                    alt={rt.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/75 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className={`grid h-9 w-9 place-items-center rounded-lg bg-white/15 backdrop-blur-sm ${rt.textColor}`}>
                      <rt.icon className="h-5 w-5" />
                    </span>
                    <span className="mt-2 block text-sm font-semibold text-white">{rt.label}</span>
                  </div>
                </div>
                <div className="bg-white p-5">
                  <p className="text-sm leading-relaxed text-mist-600">{rt.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CMS-driven articles */}
      <section className="section bg-mist-50" id="resources">
        <div className="container">
          {articles.length === 0 ? (
            <Reveal className="rounded-2xl border border-dashed border-mist-300 p-10 text-center">
              <FileText className="mx-auto h-10 w-10 text-mist-400" />
              <h2 className="mt-4 text-lg font-semibold text-ink-900">Articles coming soon</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-mist-600">
                We&apos;re preparing guides, reports and insights. Check back soon or contact us for specific topics.
              </p>
            </Reveal>
          ) : (
            <>
              {featured && (
                <Reveal className="mb-8">
                  <Link
                    href={`/resources/${featured.slug}`}
                    className="card-hover group grid gap-0 overflow-hidden md:grid-cols-2"
                  >
                    <div className="relative min-h-[240px] bg-gradient-to-br from-ink-800 to-ink-900">
                      <div aria-hidden className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_30%_50%,rgba(32,197,245,0.3),transparent_60%)]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="h-16 w-16 text-coral-400/40" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-8 bg-white">
                      <span className="text-xs font-semibold uppercase tracking-wider text-coral-600">
                        Featured · {formatDate(featured.publishedAt)}
                      </span>
                      <h2 className="mt-3 text-2xl font-semibold text-ink-900 group-hover:text-coral-700 transition-colors">
                        {featured.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-mist-600">{featured.summary}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-700">
                        Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )}
              {rest.length > 0 && (
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {rest.map((a, i) => (
                    <Reveal key={a.slug} delay={(i % 3) * 70}>
                      <Link href={`/resources/${a.slug}`} className="card-hover group flex h-full flex-col p-7">
                        <span className="text-xs font-semibold uppercase tracking-wider text-mist-500">
                          {formatDate(a.publishedAt)}
                        </span>
                        <h3 className="mt-2 text-lg font-semibold text-ink-900 group-hover:text-coral-700 transition-colors">{a.title}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-600">{a.summary}</p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-700">
                          Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
