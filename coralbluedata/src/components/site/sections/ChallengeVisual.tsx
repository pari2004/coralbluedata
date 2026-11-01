"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Challenge section visual: AI-generated corporate team image overlaid
 * with original SVG signal/noise graphic for a premium layered effect.
 */
export function ChallengeVisual() {
  return (
    <motion.div
      className="relative aspect-square w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Corporate team image as background */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <Image
          src="/images/corporate-team.png"
          alt="International B2B team collaboration"
          fill
          className="object-cover opacity-25"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900/80 via-ink-900/60 to-ink-800/80" />
      </div>

      {/* SVG visualization overlay */}
      <div className="relative h-full w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
        <svg viewBox="0 0 320 320" className="h-full w-full" role="img" aria-label="Scattered data points resolving into a focused signal">
          <defs>
            <linearGradient id="beam-challenge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38e0f5" />
              <stop offset="50%" stopColor="#00a8ff" />
              <stop offset="100%" stopColor="#1258e8" />
            </linearGradient>
            <radialGradient id="glow-center" cx="50%" cy="50%" r="30%">
              <stop offset="0%" stopColor="#20C5F5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#20C5F5" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* noise field */}
          {Array.from({ length: 48 }).map((_, i) => {
            const x = (i * 97) % 300 + 10;
            const y = (i * 53) % 300 + 10;
            return <circle key={i} cx={x} cy={y} r={(i % 3) + 1} fill="#95a6bf" opacity={0.2} />;
          })}

          {/* Center glow */}
          <circle cx="160" cy="160" r="60" fill="url(#glow-center)" />

          {/* converging lines to a focal node */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x = 160 + Math.cos(angle) * 120;
            const y = 160 + Math.sin(angle) * 120;
            return (
              <line
                key={`l-${i}`}
                x1={x}
                y1={y}
                x2="160"
                y2="160"
                stroke="url(#beam-challenge)"
                strokeWidth="1.2"
                opacity={0.5}
              />
            );
          })}

          {/* Orbiting rings */}
          <circle cx="160" cy="160" r="40" fill="none" stroke="#38e0f5" strokeWidth="0.6" opacity="0.3" />
          <circle cx="160" cy="160" r="70" fill="none" stroke="#00a8ff" strokeWidth="0.5" opacity="0.2" />
          <circle cx="160" cy="160" r="100" fill="none" stroke="#1258e8" strokeWidth="0.4" opacity="0.15" />

          {/* Center node */}
          <circle cx="160" cy="160" r="12" fill="url(#beam-challenge)" />
          <circle cx="160" cy="160" r="6" fill="#fff" opacity="0.9" />
          <circle cx="160" cy="160" r="24" fill="none" stroke="#38e0f5" strokeWidth="1.2" opacity="0.5" />
        </svg>
      </div>
    </motion.div>
  );
}
