"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * GSAP entrance choreography for hero content. Animates direct descendants
 * marked with [data-animate] in a refined stagger. Honours reduced-motion
 * (renders final state immediately) and reverts the GSAP context on unmount
 * so no timelines or inline styles leak.
 */
export function Choreograph({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll("[data-animate]");
    if (targets.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.1,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
