"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type SlideImage = { src: string; alt: string };

/**
 * Cinematic cross-fading background slideshow.
 *
 * Every `interval` ms the next image fades in over the current one. The fade
 * (`fade` ms) is long, so for that stretch both images are visible and
 * overlapping. Each slide also drifts with a slow Ken Burns zoom/pan, alternating direction,
 * so consecutive images move against each other while they overlap.
 *
 * - Only the first image is `priority`; the next one is mounted just ahead
 *   of time so it is decoded before its fade starts.
 * - Pauses when the hero is off-screen or the tab is hidden.
 * - With prefers-reduced-motion, shows the first image only (no cycling/zoom).
 */
export function HeroSlideshow({
  images,
  interval = 5000,
  fade = 1800,
  className = "opacity-35 mix-blend-lighten",
}: {
  images: SlideImage[];
  interval?: number;
  fade?: number;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  // Bumped on every advance; used as a key so each slide's Ken Burns drift
  // restarts from the beginning whenever it becomes active again.
  const [cycle, setCycle] = useState(0);
  const [mounted, setMounted] = useState<Set<number>>(() => new Set([0, 1 % images.length]));
  const [running, setRunning] = useState(true);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Pause when off-screen or tab hidden.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    let visible = true;
    const sync = () => setRunning(visible && document.visibilityState === "visible");
    const io = new IntersectionObserver(([e]) => {
      if (!e) return;
      visible = e.isIntersecting;
      sync();
    });
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  useEffect(() => {
    if (reduced || !running || images.length < 2) return;
    const id = window.setInterval(() => {
      // Read the current index from a ref so no setState runs inside another
      // updater (StrictMode double-invokes updaters in dev).
      const cur = activeRef.current;
      const next = (cur + 1) % images.length;
      activeRef.current = next;
      setPrev(cur);
      setActive(next);
      setCycle((c) => c + 1);
      // Pre-mount the slide after `next` so it has a full interval to load.
      setMounted((m) => new Set(m).add(next).add((next + 1) % images.length));
    }, interval);
    return () => window.clearInterval(id);
  }, [reduced, running, images.length, interval]);

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden">
      {images.map((img, i) => {
        if (!mounted.has(i)) return null;
        const isActive = i === active;
        const isPrev = i === prev;
        const dir = i % 2 === 0 ? "kb-a" : "kb-b";
        return (
          <div
            key={img.src}
            aria-hidden={!isActive}
            className="absolute inset-0 will-change-[opacity]"
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
              // The outgoing slide starts fading later than the incoming one,
              // so both are fully visible together mid-transition (a true
              // overlap) instead of dipping through darkness.
              transition: reduced
                ? "none"
                : `opacity ${fade}ms cubic-bezier(0.4, 0, 0.2, 1) ${isPrev ? Math.round(fade * 0.45) : 0}ms`,
            }}
          >
            <div
              key={isActive ? `c${cycle}` : isPrev ? `c${cycle - 1}` : "idle"}
              className={`absolute inset-[-6%] ${reduced ? "" : dir}`}
              style={{
                animationDuration: `${interval + fade * 2}ms`,
                animationPlayState: running && (isActive || isPrev) ? "running" : "paused",
              }}
            >
              <Image
                src={img.src}
                alt={isActive ? img.alt : ""}
                fill
                priority={i === 0}
                sizes="100vw"
                quality={80}
                unoptimized={img.src.endsWith(".svg")}
                className={`object-cover ${className}`}
              />
            </div>
          </div>
        );
      })}

      {/* Progress ticks */}
      {images.length > 1 && !reduced && (
        <div className="pointer-events-none absolute bottom-10 right-6 z-10 hidden gap-1.5 md:flex">
          {images.map((img, i) => (
            <span
              key={img.src}
              className={`h-1 rounded-full transition-all duration-700 ${
                i === active ? "w-8 bg-cyan-400/90" : "w-3 bg-white/25"
              }`}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes kbA { from { transform: scale(1) translate3d(0,0,0); } to { transform: scale(1.12) translate3d(-2%,-1.5%,0); } }
        @keyframes kbB { from { transform: scale(1.12) translate3d(2%,1%,0); } to { transform: scale(1) translate3d(0,0,0); } }
        .kb-a { animation-name: kbA; animation-timing-function: linear; animation-fill-mode: both; }
        .kb-b { animation-name: kbB; animation-timing-function: linear; animation-fill-mode: both; }
      `}</style>
    </div>
  );
}
