"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight scroll-reveal via IntersectionObserver. Content is visible by
 * default (the `.reveal` base is only dimmed when the `js` class is present,
 * set in the root layout) and honours prefers-reduced-motion through CSS.
 * GSAP-driven choreography is layered on in Phase 7 where it adds value;
 * this keeps the baseline cheap and dependency-free.
 */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  style,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Tag>
  );
}
