"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Global coverage visualization: AI-generated 3D world map with animated overlay.
 * Uses the global-coverage.png image with a subtle floating animation.
 */
export function GlobalCoverageClient() {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-md"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glow behind globe */}
      <div aria-hidden className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-400/15 to-transparent blur-2xl animate-pulse-glow" />
      
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10">
        <Image
          src="/images/global-coverage.png"
          alt="Global data coverage visualization"
          fill
          className="object-cover animate-float"
          sizes="(max-width: 768px) 100vw, 40vw"
          style={{ animationDuration: "8s" }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-ink-900/20" />
      </div>

      {/* Animated ping dots at cardinal points */}
      <div className="absolute left-[20%] top-[30%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(32,197,245,0.5)]">
        <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400" />
      </div>
      <div className="absolute right-[25%] top-[40%] h-2 w-2 rounded-full bg-coral-500 shadow-[0_0_8px_2px_rgba(0,168,255,0.5)]">
        <div className="absolute inset-0 animate-ping rounded-full bg-coral-500" style={{ animationDelay: "1s" }} />
      </div>
      <div className="absolute bottom-[35%] left-[45%] h-2 w-2 rounded-full bg-electric-400 shadow-[0_0_8px_2px_rgba(18,88,232,0.5)]">
        <div className="absolute inset-0 animate-ping rounded-full bg-electric-400" style={{ animationDelay: "2s" }} />
      </div>
    </motion.div>
  );
}
