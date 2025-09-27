import { useEffect, useRef } from "react";

export default function LightParticles({ count }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const computeCount = () => {
      if (count && Number.isFinite(count)) return count;
      if (w < 640) return 16;     // mobile
      if (w < 1024) return 22;    // tablette
      return 30;                  // desktop
    };
    let TARGET = computeCount();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      TARGET = computeCount();
    };
    window.addEventListener("resize", onResize);

    const P = [];
    function spawn() {
      const rBase = 1.5 + Math.random() * 2.5;
      P.push({
        x: Math.random() * w,
        y: h + 20,
        rBase,
        rAmp: rBase * 0.35,
        tw: Math.random() * Math.PI * 2,
        twSpeed: 1 + Math.random() * 0.8,
        speedY: 0.5 + Math.random() * 1.2,
        driftX: (Math.random() * 2 - 1) * 0.25,
        life: 1,
        huePhase: Math.random() * Math.PI * 2,
        hueSpeed: 0.4 + Math.random() * 0.6,
      });
    }
    for (let i = 0; i < TARGET; i++) spawn();

    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;

      ctx.clearRect(0, 0, w, h);

      if (P.length < TARGET) spawn();

      for (let i = P.length - 1; i >= 0; i--) {
        const p = P[i];

        // mouvement
        p.y -= p.speedY;
        p.x += p.driftX;
        p.life -= 0.003;

        // anime teinte + twinkle
        p.huePhase += p.hueSpeed * dt;
        p.tw += p.twSpeed * dt;
        const r = p.rBase + Math.sin(p.tw) * p.rAmp;

        // HSL: 40–48° → +warm shift vers ~60°
        const hueWave = 44 + 4 * Math.sin(p.huePhase);
        const warmShift = 11 * (1 - p.life);
        const hue = Math.min(60, hueWave + warmShift);
        const sat = 95;
        const lightCore = 62;
        const alpha = Math.max(p.life, 0);

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 2.6);
        grad.addColorStop(0, `hsla(${hue} ${sat}% ${lightCore}% / ${alpha})`);
        grad.addColorStop(1, `hsla(${hue} ${sat}% 86% / 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 2.6, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0 || p.y < -50 || p.x < -50 || p.x > w + 50) {
          P.splice(i, 1);
          if (P.length < TARGET) spawn();
        }
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      ctx.clearRect(0, 0, w, h);
    };
  }, [count]);

  return <canvas ref={ref} className="light-particles" aria-hidden="true" />;
}
