"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { HEALTH_CSS, HEALTH_BODY, HEALTH_JSON_LD } from "./content";

/**
 * Client wrapper for the bespoke Healthcare landing page.
 *
 * The authored HTML is injected verbatim (scoped under `.hc`). The page's
 * original behaviour <script>s are stripped during generation and
 * re-implemented here, scoped to this component's container: ARIA persona
 * tabs (click + keyboard + auto-advance), scroll reveal, stat count-up,
 * animated chart bars, and the clickable buying-stage "lanes". All queries
 * are confined to the container and all observers/timers/listeners are torn
 * down on unmount.
 *
 * A layout effect runs the setup before first paint so revealed elements
 * start hidden (no flash of un-revealed content). The `html.js` ancestor the
 * reveal CSS relies on is set by the root layout.
 */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function HealthcareLanding() {
  const rootRef = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
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

    /* ---- scroll reveal ---- */
    const sel =
      ".head,.market>.text,.market>.chart,.trow,.shift-wrap>.art,.shift-wrap>.tbl,.tile,.fly>.diagram,.fstep,.tabs,.lanes,.faq,.cta,.hs";
    const items = Array.from(root.querySelectorAll<HTMLElement>(sel));
    items.forEach((el) => {
      el.classList.add("rv");
      const sibs = el.parentElement
        ? Array.from(el.parentElement.children).filter((c) =>
            (c as HTMLElement).matches?.(sel),
          )
        : [];
      const idx = sibs.indexOf(el);
      if (idx > 0) el.style.transitionDelay = Math.min(idx, 6) * 80 + "ms";
    });

    /* ---- count-up ---- */
    const countUp = (el: HTMLElement) => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      const txt = el.textContent ?? "";
      const m = txt.match(/[\d,]*\.?\d+/);
      if (!m || reduce) return;
      const raw = m[0];
      const target = parseFloat(raw.replace(/,/g, ""));
      const dec = (raw.split(".")[1] || "").length;
      const comma = raw.indexOf(",") > -1;
      const at = m.index ?? 0;
      const pre = txt.slice(0, at);
      let post = txt.slice(at + raw.length);
      const small = el.querySelector("small");
      const smallHTML = small ? small.outerHTML : "";
      if (small) post = post.replace(small.textContent ?? "", "");
      let t0: number | null = null;
      const dur = 1400;
      const fmt = (v: number) => {
        let s = v.toFixed(dec);
        if (comma)
          s = Number(s).toLocaleString("en-US", {
            minimumFractionDigits: dec,
            maximumFractionDigits: dec,
          });
        return s;
      };
      const step = (ts: number) => {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.innerHTML = pre + fmt(target * e) + post + smallHTML;
        if (p < 1) requestAnimationFrame(step);
        else el.innerHTML = pre + raw + post + smallHTML;
      };
      requestAnimationFrame(step);
    };

    /* ---- chart bars ---- */
    const bars = Array.from(root.querySelectorAll<HTMLElement>(".hb .fl"));
    bars.forEach((b) => {
      b.dataset.w = b.style.width;
      if (!reduce && io) b.style.width = "0%";
    });

    let revealObserver: IntersectionObserver | null = null;
    if (io) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const el = en.target as HTMLElement;
            el.classList.add("in");
            const ns = Array.from(
              el.querySelectorAll<HTMLElement>(".hs .n,.metric .n"),
            );
            if (el.matches(".hs"))
              ns.push(...Array.from(el.querySelectorAll<HTMLElement>(".n")));
            ns.forEach(countUp);
            if (el.matches(".market>.chart"))
              bars.forEach((b) => {
                b.style.width = b.dataset.w || "";
              });
            revealObserver?.unobserve(el);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
      );
      items.forEach((el) => revealObserver!.observe(el));
    } else {
      items.forEach((el) => el.classList.add("in"));
    }

    /* ---- auto-advance persona tabs until the visitor interacts ---- */
    const list = root.querySelector<HTMLElement>(".tabs");
    tabs.forEach((t) => {
      const b = document.createElement("span");
      b.className = "bar";
      b.setAttribute("aria-hidden", "true");
      t.appendChild(b);
    });
    let timer: ReturnType<typeof setTimeout> | null = null;
    let stopped = reduce;
    const current = () =>
      tabs.findIndex((t) => t.getAttribute("aria-selected") === "true");
    const go = (i: number) => tabs[i]?.click();
    const schedule = () => {
      if (timer) clearTimeout(timer);
      if (stopped) return;
      timer = setTimeout(() => {
        go((current() + 1) % tabs.length);
        schedule();
      }, 7000);
    };
    const stop = () => {
      stopped = true;
      if (timer) clearTimeout(timer);
      list?.classList.add("paused");
    };
    tabs.forEach((t) => {
      t.addEventListener("pointerdown", stop);
      t.addEventListener("keydown", stop);
      cleanups.push(() => {
        t.removeEventListener("pointerdown", stop);
        t.removeEventListener("keydown", stop);
      });
    });
    const section = root.querySelector<HTMLElement>("#personas");
    if (section) {
      const onEnter = () => {
        if (!stopped) {
          if (timer) clearTimeout(timer);
          list?.classList.add("paused");
        }
      };
      const onLeave = () => {
        if (!stopped) {
          list?.classList.remove("paused");
          schedule();
        }
      };
      section.addEventListener("mouseenter", onEnter);
      section.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        section.removeEventListener("mouseenter", onEnter);
        section.removeEventListener("mouseleave", onLeave);
      });
    }
    let personaObserver: IntersectionObserver | null = null;
    if (io && section) {
      personaObserver = new IntersectionObserver(
        (es) => {
          es.forEach((en) => {
            if (en.isIntersecting) schedule();
            else if (timer) clearTimeout(timer);
          });
        },
        { threshold: 0.3 },
      );
      personaObserver.observe(section);
    }

    /* ---- buying stages: click / keyboard to focus a lane ---- */
    const lanesWrap = root.querySelector<HTMLElement>(".lanes");
    const lanes = Array.from(root.querySelectorAll<HTMLElement>(".lane"));
    lanes.forEach((l) => {
      l.tabIndex = 0;
      l.setAttribute("role", "button");
      l.setAttribute("aria-pressed", "false");
      const toggle = () => {
        const on = !l.classList.contains("active");
        lanes.forEach((x) => {
          x.classList.remove("active");
          x.setAttribute("aria-pressed", "false");
        });
        if (on) {
          l.classList.add("active");
          l.setAttribute("aria-pressed", "true");
        }
        lanesWrap?.classList.toggle("has-active", on);
      };
      const onClick = () => toggle();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      };
      l.addEventListener("click", onClick);
      l.addEventListener("keydown", onKey);
      cleanups.push(() => {
        l.removeEventListener("click", onClick);
        l.removeEventListener("keydown", onKey);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
      if (timer) clearTimeout(timer);
      revealObserver?.disconnect();
      personaObserver?.disconnect();
    };
  }, []);

  return (
    <div className="hc" ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: HEALTH_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: HEALTH_BODY }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: HEALTH_JSON_LD }}
      />
    </div>
  );
}
