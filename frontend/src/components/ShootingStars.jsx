import { useEffect, useRef } from "react";

/**
 * Canvas transparent (ne teint PAS le fond).
 * Fading via 'destination-in' (on atténue l'alpha au fil du temps, pas de voile coloré).
 * Chaque étoile a un angle aléatoire et une position de départ aléatoire.
 */
export default function ShootingStars({ intervalMs = 5200 }) {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDark = document.documentElement.classList.contains("dark");
    if (prefersReduced || !isDark) return;

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
      // départ: zone bordure (pour variété) + angle aléatoire (0–360°)
      const margin = Math.min(w, h) * 0.2;
      const edges = [
        { x: Math.random() * w, y: Math.random() * margin },            // haut
        { x: Math.random() * w, y: h - Math.random() * margin },        // bas
        { x: Math.random() * margin, y: Math.random() * h },            // gauche
        { x: w - Math.random() * margin, y: Math.random() * h },        // droite
      ];
      const start = edges[Math.floor(Math.random() * edges.length)];

      // angle aléatoire (en radians), vitesse et longueur random
      const angle = Math.random() * Math.PI * 2;
      const speed = 5.5 + Math.random() * 3.5; // px/frame
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

    let raf;
    function tick() {
      // FADE SANS TEINTER LE FOND :
      // Multiplie l'alpha du canvas (destination-in) => pas de voile visible
      ctx.save();
      ctx.globalCompositeOperation = "destination-in";
      // garde ~92% de la frame précédente (fade doux)
      ctx.fillStyle = "rgba(0,0,0,0.92)";
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      // Dessin des étoiles en "source-over" (transparent par défaut derrière)
      ctx.globalCompositeOperation = "source-over";

      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.006;

        // vecteur "arrière" pour la traînée (suivant l'angle)
        const tx = s.x - Math.cos(s.angle) * s.len;
        const ty = s.y - Math.sin(s.angle) * s.len;

        // dégradé jaune -> transparent le long de la traînée
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

        // pointe de l'étoile
        ctx.beginPath();
        ctx.fillStyle = "rgba(250,204,21,0.95)";
        ctx.arc(s.x, s.y, 1.7, 0, Math.PI * 2);
        ctx.fill();

        // sortie de l'écran ?
        if (s.x < -50 || s.x > w + 50 || s.y < -50 || s.y > h + 50 || s.life <= 0) {
          stars.splice(i, 1);
        }
      }

      raf = requestAnimationFrame(tick);
    }

    // Lancement
    raf = requestAnimationFrame(tick);
    const id = setInterval(spawnStar, intervalMs);
    spawnStar();

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
      window.removeEventListener("resize", onResize);
      ctx.clearRect(0, 0, w, h);
    };
  }, [intervalMs]);

  return <canvas ref={ref} className="stars-canvas" aria-hidden="true" />;
}
