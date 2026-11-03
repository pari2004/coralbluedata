"use client";

import { useEffect, useRef } from "react";
import { MFG_CSS, MFG_BODY, MFG_JSON_LD } from "./content";

/**
 * Client wrapper for the bespoke Manufacturing landing page.
 *
 * The authored HTML is injected verbatim (scoped under `.hc`). The page's
 * original behaviour <script>s are stripped during generation and
 * re-implemented here, scoped to this component's container: ARIA persona
 * tabs (click + keyboard), stat count-up on scroll, and a reduced-motion
 * pause for the hero SVG animation. Observers and listeners are torn down on
 * unmount.
 */
export function ManufacturingLanding() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const io = "IntersectionObserver" in window;
    const cleanups: Array<() => void> = [];

    /* ---- ARIA persona tabs: click + keyboard ---- */
    const tabs = Array.from(root.querySelectorAll<HTMLElement>('[role="tab"]'));
    const panelFor = (t: HTMLElement) => {
      const id = t.getAttribute("aria-controls");
      return id ? root.querySelector<HTMLElement>(`#${CSS.escape(id)}`) : null;
    };
    const select = (t: HTMLElement, focus = false) => {
      tabs.forEach((x) => {
        const on = x === t;
        x.setAttribute("aria-selected", on ? "true" : "false");
        x.tabIndex = on ? 0 : -1;
        const p = panelFor(x);
        if (p) p.hidden = !on;
      });
      if (focus) t.focus();
    };
    tabs.forEach((t, i) => {
      const onClick = () => select(t);
      const onKey = (e: KeyboardEvent) => {
        let n: HTMLElement | undefined;
        if (e.key === "ArrowRight") n = tabs[(i + 1) % tabs.length];
        if (e.key === "ArrowLeft") n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === "Home") n = tabs[0];
        if (e.key === "End") n = tabs[tabs.length - 1];
        if (n) {
          e.preventDefault();
          select(n, true);
        }
      };
      t.addEventListener("click", onClick);
      t.addEventListener("keydown", onKey);
      cleanups.push(() => {
        t.removeEventListener("click", onClick);
        t.removeEventListener("keydown", onKey);
      });
    });

    /* ---- stat count-up (handles several numbers per label) ---- */
    type Part = string | { raw: string };
    const countUp = (el: HTMLElement) => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      const small = el.querySelector("small");
      const smallHTML = small ? small.outerHTML : "";
      const txt = small
        ? (el.textContent ?? "").replace(small.textContent ?? "", "")
        : el.textContent ?? "";
      const re = /[\d,]*\.?\d+/g;
      const parts: Part[] = [];
      let m: RegExpExecArray | null;
      let last = 0;
      while ((m = re.exec(txt))) {
        parts.push(txt.slice(last, m.index));
        parts.push({ raw: m[0] });
        last = m.index + m[0].length;
      }
      parts.push(txt.slice(last));
      let t0: number | null = null;
      const dur = 1400;
      const fmt = (raw: string, k: number) => {
        const dec = (raw.split(".")[1] || "").length;
        const v = parseFloat(raw.replace(/,/g, "")) * k;
        const s = v.toFixed(dec);
        return raw.indexOf(",") > -1
          ? Number(s).toLocaleString("en-US", {
              minimumFractionDigits: dec,
              maximumFractionDigits: dec,
            })
          : s;
      };
      const step = (ts: number) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.innerHTML =
          parts
            .map((x) =>
              typeof x === "string" ? x : p < 1 ? fmt(x.raw, e) : x.raw,
            )
            .join("") + smallHTML;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    let observer: IntersectionObserver | null = null;
    const nums = Array.from(
      root.querySelectorAll<HTMLElement>(".hs .n, .metric .n"),
    );
    if (!reduce && io) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            countUp(en.target as HTMLElement);
            observer?.unobserve(en.target);
          });
        },
        { threshold: 0.6 },
      );
      nums.forEach((n) => {
        n.style.fontVariantNumeric = "tabular-nums";
        observer!.observe(n);
      });
    }

    /* ---- reduced motion: freeze the hero SVG animation ---- */
    if (reduce) {
      const svg = root.querySelector<SVGSVGElement>("#factory-hero");
      if (svg && typeof svg.pauseAnimations === "function") {
        svg.pauseAnimations();
        svg.setCurrentTime(1.2);
      }
    }

    return () => {
      cleanups.forEach((fn) => fn());
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="hc" ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: MFG_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: MFG_BODY }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: MFG_JSON_LD }}
      />
    </div>
  );
}
