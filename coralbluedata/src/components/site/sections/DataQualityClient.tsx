"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Data Quality visualization: AI-generated data-verification image
 * with animated pipeline stages overlay.
 */
export function DataQualityClient() {
  const stages = ["Received", "Cleansed", "Verified", "Delivered"];
  const widths = [40, 60, 80, 100];

  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl border border-mist-200 bg-gradient-to-br from-mist-50 to-white shadow-card"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* AI-generated verification image */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src="/images/data-verification.png"
          alt="Data verification and quality process"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Pipeline stages overlaid at bottom */}
      <div className="relative -mt-20 p-8">
        <div className="space-y-4">
          {stages.map((stage, i) => (
            <motion.div
              key={stage}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-coral-500 to-electric-500 text-xs font-bold text-white shadow-md">
                {i + 1}
              </span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-mist-200">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-coral-400 via-coral-500 to-electric-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${widths[i]}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <span className="w-20 text-right text-sm font-medium text-ink-700">{stage}</span>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-xs text-mist-400">Illustrative process stages — not live metrics.</p>
      </div>
    </motion.div>
  );
}
