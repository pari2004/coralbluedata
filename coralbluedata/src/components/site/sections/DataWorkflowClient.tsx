"use client";

import { motion } from "framer-motion";
import { Database, CheckCircle2, Layers, Send } from "lucide-react";
import { ArrowRight } from "lucide-react";

const ICONS = [Database, CheckCircle2, Layers, Send];

export function DataWorkflowClient({ steps }: { steps: { title: string; body: string; color: string }[] }) {
  return (
    <motion.ol
      className="mt-14 grid gap-5 md:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
      }}
    >
      {steps.map((s, i) => {
        const IconComp = ICONS[i] ?? Database;
        return (
          <motion.li
            key={s.title}
            className="relative"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <div className="card h-full p-7 group hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-md`}>
                  <IconComp className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <span className="font-display text-sm font-semibold text-mist-300">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-600">{s.body}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="absolute -right-3.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-mist-300 md:block" />
            )}
          </motion.li>
        );
      })}
    </motion.ol>
  );
}
