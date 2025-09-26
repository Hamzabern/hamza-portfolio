import { useEffect, useRef } from "react";

/**
 * Particules lumineuses (light mode seulement).
 * Variation subtile de teinte (jaune ⇄ orangé ⇄ presque blanc).
 */
export default function LightParticles({ count = 24 }) {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isLight = !document.documentElement.classList.contains("dark");
    if (prefersReduced || !isLight) return;

    const canvas = ref.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const particles = [];

    function spawn() {
      const base = Math.random();
      // NEW: phase/tempo individuels pour la variation de teinte
      const huePhase = Math.random() * Math.PI * 2; // 0..2π
      const hueSpeed = 0.25 + Math.random() * 0.6;  // cycles lents
      particles.push({
        x: Math.random() * w,
        y: h + 20,
        r: 1.5 + Math.random() * 2.5,
        speed: 0.5 + Math.random() * 1.2,
        life: 1,
        base,
        huePhase,
        hueSpeed,
      });
    }

    for (let i = 0; i < count; i++) spawn();

    let start = performance.now();
    let raf;
    function tick(now) {
      const t = (now - start) / 1000; // secondes écoulées
      ctx.clearRect(0, 0, w, h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.speed;
        p.life -= 0.003;

        // NEW: teinte HSL qui ondule entre ~48° (jaune) et ~40° (orangé doux)
        // petit shift vers 55° (plus “blanc chaud”) selon la vie restante
        const hueWave = 44 + 4 * Math.sin(p.huePhase + t * p.hueSpeed); // 40–48°
        const warmShift = 11 * (1 - p.life); // 0→11°
        const hue = Math.min(60, hueWave + warmShift); // borne haute 60°
        const sat = 95; // saturation forte mais pas fluo
        const lightCore = 62;  // cœur lumineux
        const alpha = Math.max(p.life, 0);

        // dégradé radial doux
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.6);
        grad.addColorStop(0, `hsla(${hue} ${sat}% ${lightCore}% / ${alpha})`);
        grad.addColorStop(1, `hsla(${hue} ${sat}% 85% / 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.6, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0 || p.y < -50) {
          particles.splice(i, 1);
          spawn();
        }
      }

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [count]);

  return <canvas ref={ref} className="light-particles" aria-hidden="true" />;
}
