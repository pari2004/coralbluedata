"use client";

import { useEffect, useRef } from "react";
import { TECH_CSS, TECH_BODY, TECH_JSON_LD } from "./content";

/**
 * Client wrapper for the bespoke Technology landing page.
 *
 * The authored HTML is injected verbatim (scoped under `.hc`). The page's
 * original tabs <script> is stripped during generation and re-implemented
 * here in a useEffect, scoped to this component's container, so the ARIA
 * tablist keeps its click + keyboard behaviour.
 */
export function TechnologyLanding() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const tabs = Array.from(
      root.querySelectorAll<HTMLElement>('[role="tab"]'),
    );
    if (tabs.length === 0) return;

    const panelFor = (tab: HTMLElement) => {
      const id = tab.getAttribute("aria-controls");
      return id ? root.querySelector<HTMLElement>(`#${CSS.escape(id)}`) : null;
    };

    const select = (tab: HTMLElement, focus = false) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        const panel = panelFor(t);
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
    };

    const cleanups: Array<() => void> = [];
    tabs.forEach((tab, i) => {
      const onClick = () => select(tab);
      const onKeydown = (e: KeyboardEvent) => {
        let next: HTMLElement | undefined;
        if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
        if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === "Home") next = tabs[0];
        if (e.key === "End") next = tabs[tabs.length - 1];
        if (next) {
          e.preventDefault();
          select(next, true);
        }
      };
      tab.addEventListener("click", onClick);
      tab.addEventListener("keydown", onKeydown);
      cleanups.push(() => {
        tab.removeEventListener("click", onClick);
        tab.removeEventListener("keydown", onKeydown);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="hc" ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: TECH_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: TECH_BODY }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: TECH_JSON_LD }}
      />
    </div>
  );
}
