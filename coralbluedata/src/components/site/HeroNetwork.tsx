"use client";

import { useEffect, useRef } from "react";

/**
 * Original animated "data network" for the hero: drifting nodes connected by
 * fading links, with a soft pointer-reactive parallax. Pure canvas 2D — no 3D
 * dependency, cheap on the GPU, and degrades gracefully:
 *   - prefers-reduced-motion → renders a single static frame (no RAF loop)
 *   - small screens → fewer nodes
 *   - no JS → the parent renders a CSS gradient fallback instead
 * The loop is fully cleaned up on unmount (RAF + listeners).
 */
type Node = { x: number; y: number; vx: number; vy: number; r: number };

export function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    // Non-null aliases so hoisted nested functions keep the narrowed types.
    const cv: HTMLCanvasElement = canvas;
    const ctx: CanvasRenderingContext2D = context;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;
    const pointer = { x: 0.5, y: 0.5, active: false };

    const COLORS = { node: "#38e0f5", link: "0,168,255", accent: "#1258e8" };

    function resize() {
      const parent = cv.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = width * dpr;
      cv.height = height * dpr;
      cv.style.width = `${width}px`;
      cv.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = width < 640 ? 13000 : 9000;
      const count = Math.max(14, Math.min(64, Math.round((width * height) / density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const linkDist = width < 640 ? 110 : 150;
      const px = (pointer.x - 0.5) * 24;
      const py = (pointer.y - 0.5) * 24;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]!;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.5;
            ctx.strokeStyle = `rgba(${COLORS.link},${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x + px * a.r * 0.3, a.y + py * a.r * 0.3);
            ctx.lineTo(b.x + px * b.r * 0.3, b.y + py * b.r * 0.3);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = n.r > 2 ? COLORS.accent : COLORS.node;
        ctx.globalAlpha = 0.9;
        ctx.arc(n.x + px * n.r * 0.3, n.y + py * n.r * 0.3, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    function onPointer(e: PointerEvent) {
      const rect = cv.getBoundingClientRect();
      pointer.x = (e.clientX - rect.left) / rect.width;
      pointer.y = (e.clientY - rect.top) / rect.height;
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer);

    if (reduce) {
      draw(); // single static frame
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
