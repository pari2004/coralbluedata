"use client";

import { motion } from "framer-motion";
import { Target, RefreshCcw, ShieldCheck, Workflow, type LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Target,
  ShieldCheck,
  RefreshCcw,
  Workflow,
};

export function ValuePropClient({
  pillars,
}: {
  pillars: { icon: string; title: string; body: string; gradient: string }[];
}) {
  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
      }}
    >
      {pillars.map((p, i) => {
        const IconComp = ICON_MAP[p.icon] ?? Target;
        return (
          <motion.div
            key={p.title}
            className="card p-6 group hover:-translate-y-1 transition-all duration-300 hover:shadow-lift"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.97 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <span className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${p.gradient} text-coral-600 transition-all duration-300 group-hover:shadow-md`}>
              <IconComp className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink-900">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-600">{p.body}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
