"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { EDU_CSS, EDU_BODY } from "./content";

/**
 * Client wrapper for the bespoke Education landing page.
 *
 * The authored HTML is injected verbatim (scoped under `.hc`). The page's
 * original behaviour <script> is stripped during generation and
 * re-implemented here, scoped to this component's container: two accessible
 * tablists (hero K-12/Higher-Ed switch + persona tabs), scroll reveal,
 * data-driven stat count-up and animated chart bars. Observers and listeners
 * are torn down on unmount.
 */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function EducationLanding() {
  const rootRef = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const io = "IntersectionObserver" in window;
    const cleanups: Array<() => void> = [];

    /* ---- count-up ---- */
    const fmt = (v: number, d: number) =>
      d ? v.toFixed(d) : Math.round(v).toLocaleString("en-US");
    const finish = (el: HTMLElement) => {
      const d = +(el.dataset.decimals || 0);
      el.textContent = fmt(+(el.dataset.to || 0), d) + (el.dataset.suffix || "");
    };
    const run = (el: HTMLElement) => {
      const to = +(el.dataset.to || 0);
      const d = +(el.dataset.decimals || 0);
      const suf = el.dataset.suffix || "";
      const dur = 1600;
      let t0: number | null = null;
      const tick = (t: number) => {
        if (t0 === null) t0 = t;
        const p = Math.min((t - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(to * e, d) + (p === 1 ? suf : "");
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const counts = Array.from(root.querySelectorAll<HTMLElement>(".count"));
    const bars = Array.from(root.querySelectorAll<HTMLElement>(".bar-fill"));
    const reveals = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    const barsWrap = root.querySelector<HTMLElement>(".bars");
    const fillBars = () =>
      bars.forEach((b) => {
        b.style.width = (b.dataset.w || "0") + "%";
      });

    let observer: IntersectionObserver | null = null;
    if (reduce || !io) {
      counts.forEach(finish);
      fillBars();
      reveals.forEach((r) => r.classList.add("in"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const el = en.target as HTMLElement;
            if (el.classList.contains("count")) run(el);
            else if (el.classList.contains("bars")) fillBars();
            else el.classList.add("in");
            observer?.unobserve(el);
          });
        },
        { threshold: 0.25, rootMargin: "0px 0px -40px 0px" },
      );
      counts.forEach((c) => observer!.observe(c));
      if (barsWrap) observer.observe(barsWrap);
      reveals.forEach((r) => observer!.observe(r));
    }

    /* ---- accessible tabs (hero switch + personas) ---- */
    const wireTabs = (list: HTMLElement) => {
      const btns = Array.from(list.querySelectorAll<HTMLElement>('[role="tab"]'));
      const panelFor = (b: HTMLElement) => {
        const id = b.getAttribute("aria-controls");
        return id ? root.querySelector<HTMLElement>(`#${CSS.escape(id)}`) : null;
      };
      const select = (b: HTMLElement, focus = false) => {
        btns.forEach((x) => {
          const on = x === b;
          x.setAttribute("aria-selected", String(on));
          x.tabIndex = on ? 0 : -1;
          const p = panelFor(x);
          if (p) p.hidden = !on;
        });
        if (focus) b.focus();
      };
      btns.forEach((b, i) => {
        const onClick = () => select(b);
        const onKey = (e: KeyboardEvent) => {
          let n: HTMLElement | undefined;
          if (e.key === "ArrowRight") n = btns[(i + 1) % btns.length];
          if (e.key === "ArrowLeft") n = btns[(i - 1 + btns.length) % btns.length];
          if (e.key === "Home") n = btns[0];
          if (e.key === "End") n = btns[btns.length - 1];
          if (n) {
            e.preventDefault();
            select(n, true);
          }
        };
        b.addEventListener("click", onClick);
        b.addEventListener("keydown", onKey);
        cleanups.push(() => {
          b.removeEventListener("click", onClick);
          b.removeEventListener("keydown", onKey);
        });
      });
    };
    root.querySelectorAll<HTMLElement>('[role="tablist"]').forEach(wireTabs);

    return () => {
      cleanups.forEach((fn) => fn());
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="hc" ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: EDU_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: EDU_BODY }} />
    </div>
  );
}
