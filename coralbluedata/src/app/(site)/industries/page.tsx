import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartPulse, Building2, Cpu, Wrench, TrendingUp, ShoppingCart } from "lucide-react";
import { NavPageHero } from "@/components/site/NavPageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/icon";
import { listPublishedIndustries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industry-specific B2B data solutions, configurable to the sectors you sell into.",
};

const INDUSTRY_SHOWCASE = [
  {
    image: "/images/navigation/industries-healthcare.webp",
    label: "Healthcare & Life Sciences",
    icon: HeartPulse,
    description: "Precision data for pharmaceutical, hospital network, and medical device companies.",
  },
  {
    image: "/images/navigation/industries-technology.webp",
    label: "Technology & Software",
    icon: Cpu,
    description: "Decision-maker contacts and firmographics for SaaS, infrastructure, and IT services companies.",
  },
  {
    image: "/images/navigation/industries-finance.webp",
    label: "Banking & Finance",
    icon: TrendingUp,
    description: "Verified data for banks, asset managers, fintechs, and financial services organizations.",
  },
  {
    image: "/images/navigation/industries-manufacturing.webp",
    label: "Manufacturing",
    icon: Wrench,
    description: "Procurement, operations, and engineering contacts across industrial and discrete manufacturing.",
  },
];

const HERO_SLIDES = [
  { src: "/images/navigation/industries-hero.webp", alt: "Enterprise teams across industries" },
  { src: "/images/navigation/industries-healthcare.webp", alt: "Healthcare and life sciences" },
  { src: "/images/navigation/industries-technology.webp", alt: "Technology and data centre infrastructure" },
  { src: "/images/navigation/industries-network.svg", alt: "Industry hubs linked in a shared data network" },
  { src: "/images/navigation/industries-finance.webp", alt: "Banking and finance" },
  { src: "/images/navigation/industries-manufacturing.webp", alt: "Manufacturing and automation" },
  { src: "/images/navigation/industries-corporate-team.webp", alt: "Corporate team collaborating" },
];

export default async function IndustriesPage() {
  const industries = await listPublishedIndustries();

  return (
    <>
      <NavPageHero
        eyebrow="Industries"
        title="Data tuned to"
        titleHighlight="your sector"
        description="We tailor data and targeting to the realities of each industry. Generic lists don't cut it — our sector-specific approach gets you to the right decision-makers faster."
        primaryCta={{ label: "Explore Industries", href: "#industries" }}
        secondaryCta={{ label: "Request a Quote", href: "/request-a-quote" }}
        imageSrc="/images/navigation/industries-hero.webp"
        imageAlt="International enterprise industries"
        images={HERO_SLIDES}
        accent="electric"
      />

      {/* Industry showcase grid */}
      <section className="section bg-white relative overflow-hidden" id="industries">
        <div aria-hidden className="absolute left-0 top-0 h-80 w-80 rounded-full bg-electric-50 blur-[120px] opacity-40" />
        <div className="container relative">
          <Reveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Sectors we support</p>
            <h2 className="text-display-md text-ink-900">Industry-specific intelligence at scale</h2>
            <p className="mt-4 leading-relaxed text-mist-600">
              Each vertical has its own data characteristics, decision-making structures, and compliance requirements. Our datasets reflect that.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {INDUSTRY_SHOWCASE.map((ind, i) => (
              <Reveal key={ind.label} delay={(i % 2) * 100} className="group">
                <div className="card-hover overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={ind.image}
                      alt={ind.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="flex items-center gap-2">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/15 backdrop-blur-sm text-white">
                          <ind.icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold text-white">{ind.label}</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-mist-600">{ind.description}</p>
                    <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-700 hover:text-electric-600 transition-colors">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CMS-driven industries */}
      {industries.length > 0 && (
        <section className="section bg-mist-50">
          <div className="container">
            <Reveal className="max-w-2xl mb-12">
              <p className="eyebrow mb-4">All industries</p>
              <h2 className="text-display-md text-ink-900">Every vertical, covered</h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((ind, i) => (
                <Reveal key={ind.slug} delay={(i % 3) * 70}>
                  <Link href={`/industries/${ind.slug}`} className="card-hover group flex h-full items-start gap-4 p-6">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric-500/15 to-coral-500/10 text-electric-600">
                      <Icon name={ind.icon} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-semibold text-ink-900 group-hover:text-coral-700 transition-colors">{ind.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-mist-600">{ind.summary}</span>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-700">
                        Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
