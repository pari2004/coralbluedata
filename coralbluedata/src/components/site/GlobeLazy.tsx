"use client";

import dynamic from "next/dynamic";

/**
 * Lazy boundary for the Three.js globe: ssr:false keeps three.js out of the
 * server render and the initial JS, with a lightweight static fallback shown
 * while it loads (and for users where WebGL/JS is unavailable).
 */
const Globe3D = dynamic(() => import("./Globe3D").then((m) => m.Globe3D), {
  ssr: false,
  loading: () => (
    <div className="mx-auto flex aspect-square w-full max-w-md items-center justify-center">
      <div className="h-48 w-48 rounded-full border border-coral-500/30 bg-[radial-gradient(circle_at_40%_35%,rgba(0,168,255,0.3),transparent_60%)]" />
    </div>
  ),
});

export function GlobeLazy() {
  return <Globe3D />;
}
