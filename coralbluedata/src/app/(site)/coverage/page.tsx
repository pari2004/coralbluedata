import type { Metadata } from "next";
import Image from "next/image";
import { Globe2 } from "lucide-react";
import { NavPageHero } from "@/components/site/NavPageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { GlobeLazy } from "@/components/site/GlobeLazy";
import { listPublicCoverage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Global Coverage",
  description: "Where Coral Blue Data provides B2B data coverage. We publish only confirmed, verified regions.",
};

const REGION_IMAGES = [
  {
    src: "/images/navigation/coverage-north-america.webp",
    alt: "North America & Europe coverage",
    label: "North America & Europe",
    detail: "In-depth firmographic and contact data for US, Canada, UK and EMEA markets.",
  },
  {
    src: "/images/navigation/coverage-asia-pacific.webp",
    alt: "Asia Pacific coverage",
    label: "Asia Pacific & Middle East",
    detail: "Growing coverage across APAC, India, Singapore, UAE and key emerging markets.",
  },
  {
    src: "/images/navigation/coverage-global-network.webp",
    alt: "Global network map",
    label: "Global Network",
    detail: "Interconnected dataset spanning major B2B market economies worldwide.",
  },
];

const HERO_SLIDES = [
  { src: "/images/navigation/coverage-hero.webp", alt: "Global data coverage" },
  { src: "/images/navigation/coverage-earth-network.webp", alt: "Earth wrapped in a data network" },
  { src: "/images/navigation/coverage-north-america.webp", alt: "North America and Europe" },
  { src: "/images/navigation/coverage-routes.svg", alt: "World map with glowing data routes" },
  { src: "/images/navigation/coverage-asia-pacific.webp", alt: "Asia Pacific and Middle East" },
  { src: "/images/navigation/coverage-world-map.webp", alt: "Illuminated world map" },
  { src: "/images/navigation/coverage-global-network.webp", alt: "Global connection network" },
];

export default async function CoveragePage() {
  const regions = await listPublicCoverage();

  return (
    <>
      <NavPageHero
        eyebrow="Global coverage"
        title="Data where your"
        titleHighlight="market actually is"
        description="We publish coverage we can stand behind. Every region listed below has been verified by the business — we never claim coverage we haven't confirmed."
        primaryCta={{ label: "Tell us your markets", href: "/contact" }}
        secondaryCta={{ label: "See verified regions", href: "#regions" }}
        imageSrc="/images/navigation/coverage-hero.webp"
        imageAlt="Cinematic global data coverage visualization"
        images={HERO_SLIDES}
        accent="cyan"
      />

      {/* Interactive 3D Globe section */}
      <section className="section surface-dark relative overflow-hidden">
        <div aria-hidden className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-[700px] rounded-full bg-cyan-400/6 blur-[100px]" />
        <div className="container relative grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4 text-coral-300">Interactive visualization</p>
            <h2 className="text-display-md text-white">An interactive view of our network</h2>
            <p className="mt-4 max-w-md leading-relaxed text-mist-300">
              An illustrative 3D representation of a global data network. Specific verified coverage is listed
              below — this visual is decorative and makes no coverage claim on its own.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Real-time accuracy checks", "Multi-region sourcing", "GDPR-aware handling", "Scheduled refresh"].map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-sm text-mist-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {feat}
                </div>
              ))}
            </div>
          </Reveal>
          <GlobeLazy />
        </div>
      </section>

      {/* Region image cards */}
      <section className="section bg-white relative overflow-hidden">
        <div aria-hidden className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-coral-50 blur-[120px] opacity-40" />
        <div className="container relative">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Regional coverage</p>
            <h2 className="text-display-md text-ink-900">Major markets, well-covered</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {REGION_IMAGES.map((r, i) => (
              <Reveal key={r.label} delay={i * 80} className="group overflow-hidden rounded-2xl border border-mist-200 shadow-card hover:-translate-y-1 transition-all duration-300 hover:shadow-lift">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={r.src}
                    alt={r.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Globe2 className="h-4 w-4 text-cyan-400" /> {r.label}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-mist-600">{r.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CMS-driven verified regions */}
      <section className="section bg-mist-50" id="regions">
        <div className="container">
          <Reveal className="max-w-2xl mb-10">
            <p className="eyebrow mb-4">Verified coverage</p>
            <h2 className="text-display-md text-ink-900">Confirmed regions</h2>
            <p className="mt-4 leading-relaxed text-mist-600">
              We don&apos;t imply coverage we haven&apos;t confirmed. The regions below are published with verified detail.
            </p>
          </Reveal>
          {regions.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {regions.map((r, i) => (
                <Reveal key={r.id} delay={(i % 3) * 70} className="card p-7">
                  <span className="flex items-center gap-2 font-semibold text-ink-900">
                    <Globe2 className="h-5 w-5 text-coral-600" /> {r.region}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-mist-600">{r.detail}</p>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="rounded-2xl border border-dashed border-mist-300 bg-white p-10 text-center">
              <Globe2 className="mx-auto h-10 w-10 text-mist-400" />
              <h2 className="mt-4 text-lg font-semibold text-ink-900">Coverage detail coming soon</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-mist-600">
                We don&apos;t imply coverage we haven&apos;t confirmed. Tell us the markets you need and we&apos;ll confirm what we can support.
              </p>
            </Reveal>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
