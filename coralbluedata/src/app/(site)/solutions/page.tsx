import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { NavPageHero } from "@/components/site/NavPageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/icon";
import { listPublishedServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description: "B2B data and data-management services across the full data lifecycle — from sourcing to delivery.",
};

const CAPABILITIES = [
  "Company & contact data sourcing",
  "Data enrichment & append",
  "Verification & de-duplication",
  "Scheduled data refresh",
  "Custom list building",
  "CRM data hygiene",
];

const FEATURED_IMAGES = [
  { src: "/images/navigation/solutions-b2b-intelligence.webp", alt: "B2B contact intelligence analytics", label: "B2B Intelligence" },
  { src: "/images/navigation/solutions-healthcare.webp", alt: "Healthcare data solutions", label: "Healthcare Data" },
  { src: "/images/navigation/solutions-data-enrichment.webp", alt: "Data enrichment pipeline", label: "Data Enrichment" },
];

const HERO_SLIDES = [
  { src: "/images/navigation/solutions-hero.webp", alt: "Global B2B data intelligence network" },
  { src: "/images/navigation/solutions-dashboard.webp", alt: "Company intelligence dashboard" },
  { src: "/images/navigation/solutions-b2b-intelligence.webp", alt: "B2B contact intelligence analytics" },
  { src: "/images/navigation/solutions-streams.svg", alt: "Data streams flowing into connected company records" },
  { src: "/images/navigation/solutions-healthcare-lab.webp", alt: "Healthcare team reviewing data" },
  { src: "/images/navigation/solutions-data-enrichment.webp", alt: "Data enrichment pipeline" },
  { src: "/images/navigation/solutions-healthcare.webp", alt: "Healthcare data solutions" },
];

export default async function SolutionsPage() {
  const services = await listPublishedServices();

  return (
    <>
      <NavPageHero
        eyebrow="Solutions"
        title="Data intelligence across"
        titleHighlight="the full lifecycle"
        description="From finding the right accounts to keeping your records clean and current — explore the capabilities that power modern B2B go-to-market teams."
        primaryCta={{ label: "Request a Quote", href: "/request-a-quote" }}
        secondaryCta={{ label: "See all solutions", href: "#solutions" }}
        imageSrc="/images/navigation/solutions-hero.webp"
        imageAlt="Global B2B data intelligence network"
        images={HERO_SLIDES}
        accent="cyan"
      />

      {/* Feature image row */}
      <section className="section-compact bg-white relative overflow-hidden">
        <div aria-hidden className="absolute right-0 top-0 h-80 w-80 rounded-full bg-coral-50 blur-[120px] opacity-50" />
        <div className="container relative">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">What we offer</p>
            <h2 className="text-display-md text-ink-900">Enterprise-grade data for modern sales teams</h2>
            <p className="mt-4 leading-relaxed text-mist-600">
              Our data solutions are designed to slot into the systems and processes your team already uses.
              No rip-and-replace required.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {FEATURED_IMAGES.map((img, i) => (
              <Reveal key={img.label} delay={i * 80} className="group relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white border border-white/15">
                    {img.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Capabilities list */}
          <Reveal>
            <div className="rounded-3xl border border-mist-200 bg-mist-50 p-8 md:p-10">
              <h3 className="text-lg font-semibold text-ink-900 mb-6">Core capabilities</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {CAPABILITIES.map((cap) => (
                  <div key={cap} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-coral-600" />
                    <span className="text-sm text-ink-800">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="section bg-mist-50" id="solutions">
        <div className="container">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">All solutions</p>
            <h2 className="text-display-md text-ink-900">Browse by capability</h2>
          </Reveal>
          {services.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-mist-300 p-10 text-center text-mist-500">
              No solutions published yet. Add them in <span className="font-semibold">/admin</span>.
            </p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 70}>
                  <Link href={`/solutions/${s.slug}`} className="card-hover group flex h-full flex-col p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-ink-900 to-ink-800 text-cyan-400 shadow-md transition-all duration-300 group-hover:from-coral-500 group-hover:to-electric-500 group-hover:text-white group-hover:shadow-[0_0_24px_-4px_rgba(32,197,245,0.4)]">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <h2 className="mt-6 text-lg font-semibold text-ink-900 group-hover:text-coral-700 transition-colors">{s.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-600">{s.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-700 group-hover:text-electric-600 transition-colors">
                      Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
