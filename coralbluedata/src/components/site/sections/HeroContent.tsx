"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Client-side animated hero content using Framer Motion.
 * Extracted from Hero (server component) so animations only load on the client.
 */
export function HeroContent({
  heading,
  highlight,
  subheading,
  primary,
  secondary,
}: {
  heading: string;
  highlight?: string;
  subheading: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  return (
    <motion.div
      className="max-w-3xl"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
      }}
    >
      <motion.p
        className="eyebrow mb-6 text-coral-300"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
      >
        B2B Data Intelligence
      </motion.p>

      <motion.h1
        className="font-display text-display-xl font-semibold text-white"
        variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
      >
        {heading}
        {highlight && (
          <>
            {" "}
            <span className="bg-gradient-to-r from-cyan-400 via-coral-300 to-electric-300 bg-clip-text text-transparent">
              {highlight}
            </span>
          </>
        )}
      </motion.h1>

      <motion.p
        className="mt-6 max-w-xl text-lg leading-relaxed text-mist-300"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
      >
        {subheading}
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col gap-4 sm:flex-row"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
      >
        <Link href={primary.href} className="btn-primary group">
          {primary.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link href={secondary.href} className="btn-ghost-dark">
          {secondary.label}
        </Link>
      </motion.div>

      <motion.p
        className="mt-8 text-sm text-mist-500"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3 } } }}
      >
        Honest, privacy-conscious B2B data — delivered the way your team works.
      </motion.p>
    </motion.div>
  );
}
