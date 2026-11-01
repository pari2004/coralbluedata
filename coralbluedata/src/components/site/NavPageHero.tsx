"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HeroSlideshow, type SlideImage } from "./HeroSlideshow";

/**
 * Premium cinematic page hero with full-bleed background image,
 * layered gradients, animated content entrance, and dual CTAs.
 * Used across all five navigation destination pages.
 *
 * Pass `images` to get a cross-fading slideshow (images overlap while they
 * fade); otherwise the single `imageSrc` is shown as before.
 */
export function NavPageHero({
  eyebrow,
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  images,
  interval = 5000,
  accent = "cyan",
}: {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
  images?: SlideImage[];
  interval?: number;
  accent?: "cyan" | "coral" | "electric";
}) {
  const gradientMap = {
    cyan: "from-cyan-400 via-coral-300 to-electric-300",
    coral: "from-accent-400 via-accent-500 to-coral-400",
    electric: "from-electric-300 via-coral-300 to-cyan-400",
  };

  return (
    <section className="relative isolate overflow-hidden bg-ink-900 pt-20 min-h-[88vh] flex items-center">
      {/* Full-bleed background image */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <HeroSlideshow
          images={images && images.length > 0 ? images : [{ src: imageSrc, alt: imageAlt }]}
          interval={interval}
          className="opacity-40 mix-blend-lighten"
        />
        <div className="absolute inset-0 z-[3] bg-[radial-gradient(ellipse_at_60%_40%,rgba(6,20,38,0.3),rgba(6,20,38,0.85)_60%),linear-gradient(180deg,rgba(6,20,38,0.5),rgba(6,20,38,0.95))]" />
      </div>

      {/* Glow orbs */}
      <div aria-hidden className="absolute left-[5%] top-[25%] -z-[1] h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px] animate-pulse-glow" />
      <div aria-hidden className="absolute right-[10%] bottom-[20%] -z-[1] h-80 w-80 rounded-full bg-electric-500/8 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Grid texture */}
      <div aria-hidden className="absolute inset-0 -z-[1] bg-grid-fade [background-size:28px_28px] opacity-[0.08]" />

      {/* Bottom fade */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-900" />

      <div className="container relative py-20 md:py-28">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          <motion.p
            className="eyebrow mb-6 text-coral-300"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            className="font-display text-display-xl font-semibold text-white"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          >
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className={`bg-gradient-to-r ${gradientMap[accent]} bg-clip-text text-transparent`}>
                  {titleHighlight}
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist-300"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
          >
            {description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <Link href={primaryCta.href} className="btn-primary group">
              {primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-ghost-dark">
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
