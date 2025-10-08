import { useEffect, useRef } from "react";

export default function ShootingStars({ intervalMs = 5200 }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const stars = [];
    function spawnStar() {
      const margin = Math.min(w, h) * 0.2;
      const edges = [
        { x: Math.random() * w, y: Math.random() * margin },
        { x: Math.random() * w, y: h - Math.random() * margin },
        { x: Math.random() * margin, y: Math.random() * h },
        { x: w - Math.random() * margin, y: Math.random() * h },
      ];
      const start = edges[Math.floor(Math.random() * edges.length)];
      const angle = Math.random() * Math.PI * 2;
      const speed = 5.5 + Math.random() * 3.5;
      const len = 120 + Math.random() * 100;

      stars.push({
        x: start.x,
        y: start.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len,
        angle,
        life: 1,
      });
    }

    // ---- TICK (avec dt clampé et fade des traces) ----
    let raf;
    let last = 0; // important pour reset propre
    const tick = (now) => {
      if (!last) last = now;
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;

      // FADE progressif des anciennes traces (ne pas clearRect ici)
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.08)"; // 0.06 = plus long ; 0.12 = plus court
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      // dessin normal
      ctx.globalCompositeOperation = "source-over";

      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.006 * (1 + dt * 30);

        const tx = s.x - Math.cos(s.angle) * s.len;
        const ty = s.y - Math.sin(s.angle) * s.len;

        const grad = ctx.createLinearGradient(tx, ty, s.x, s.y);
        grad.addColorStop(0, "rgba(250,204,21,0)");
        grad.addColorStop(0.25, "rgba(250,204,21,0.25)");
        grad.addColorStop(0.65, "rgba(250,204,21,0.6)");
        grad.addColorStop(1, "rgba(250,204,21,1)");

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.moveTo(tx, ty);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "rgba(250,204,21,0.95)";
        ctx.arc(s.x, s.y, 1.7, 0, Math.PI * 2);
        ctx.fill();

        if (s.x < -50 || s.x > w + 50 || s.y < -50 || s.y > h + 50 || s.life <= 0) {
          stars.splice(i, 1);
        }
      }

      raf = requestAnimationFrame(tick);
    };

    // ---- Spawn timer (contrôlé) + visibilité page ----
    let spawnTimer = null;
    const startSpawn = () => { if (!spawnTimer) spawnTimer = setInterval(spawnStar, intervalMs); };
    const stopSpawn = () => { if (spawnTimer) { clearInterval(spawnTimer); spawnTimer = null; } };

    const onVisibility = () => {
      if (document.hidden) {
        // pause propre → pas d'explosion à la reprise
        stopSpawn();
        cancelAnimationFrame(raf);
        last = 0; // reset dt
      } else {
        startSpawn();
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    // start
    startSpawn();
    spawnStar();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      stopSpawn();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      ctx.clearRect(0, 0, w, h);
    };
  }, [intervalMs]);

  return <canvas ref={ref} className="stars-canvas" aria-hidden="true" />;
}
