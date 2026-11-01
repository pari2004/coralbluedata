"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Purposeful Three.js globe for the coverage page: a wireframe sphere with
 * glowing point markers and a slow auto-rotation. Dynamically imported
 * (ssr:false) so the ~0.15MB library never touches the initial bundle, pauses
 * when offscreen/reduced-motion, and fully disposes geometries/renderer on
 * unmount to avoid WebGL context leaks.
 */
export function Globe3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const size = Math.min(mount.clientWidth, 460);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Wireframe sphere
    const sphereGeo = new THREE.SphereGeometry(1, 36, 36);
    const wire = new THREE.WireframeGeometry(sphereGeo);
    const lines = new THREE.LineSegments(
      wire,
      new THREE.LineBasicMaterial({ color: 0x1a4fab, transparent: true, opacity: 0.4 }),
    );
    group.add(lines);

    // Inner glow sphere
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.98, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x082746, transparent: true, opacity: 0.6 }),
    );
    group.add(glow);

    // Point markers scattered on the surface
    const pointsGeo = new THREE.BufferGeometry();
    const count = 60;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Deterministic-ish distribution (no Math.random dependency on seed)
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      positions[i * 3] = Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = Math.cos(phi);
    }
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const points = new THREE.Points(
      pointsGeo,
      new THREE.PointsMaterial({ color: 0x38e0f5, size: 0.05, transparent: true, opacity: 0.95 }),
    );
    group.add(points);

    group.rotation.x = 0.4;

    let raf = 0;
    let running = true;
    const render = () => renderer.render(scene, camera);

    const animate = () => {
      if (!running) return;
      group.rotation.y += 0.0025;
      render();
      raf = requestAnimationFrame(animate);
    };

    // Pause when offscreen to save battery/GPU.
    const io = new IntersectionObserver(
      ([entry]) => {
        running = !!entry?.isIntersecting && !reduce;
        if (running) animate();
        else cancelAnimationFrame(raf);
      },
      { threshold: 0.05 },
    );
    io.observe(mount);

    render(); // first frame regardless
    if (!reduce) animate();

    const onResize = () => {
      const s = Math.min(mount.clientWidth, 460);
      renderer.setSize(s, s);
      render();
    };
    window.addEventListener("resize", onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      sphereGeo.dispose();
      wire.dispose();
      pointsGeo.dispose();
      (lines.material as THREE.Material).dispose();
      (glow.material as THREE.Material).dispose();
      (points.material as THREE.Material).dispose();
      glow.geometry.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="mx-auto flex aspect-square w-full max-w-md items-center justify-center" aria-hidden />;
}
