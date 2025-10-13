import { useEffect, useRef } from "react";
import Section from "../layout/section";
import LazyImage from "../ui/lazyImage";

const TECH = [
  { name:"Laravel", img:"https://laravel.com/img/logomark.min.svg", desc:"Backend & API" },
  { name:"React", img:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", desc:"SPA Frontend" },
  { name:"Tailwind", img:"https://tailwindcss.com/favicons/apple-touch-icon.png", desc:"User Interface" },
  { name:"MySQL", img:"https://www.mysql.com/common/logos/logo-mysql-170x115.png", desc:"Base de données" },
  { name:"GitHub", img:"https://github.githubassets.com/favicons/favicon.png", desc:"VCS & CI" },
  { name:"Docker", img:"https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png", desc:"Conteneurs (base)" },
  { name:"Vite", img:"https://vitejs.dev/logo.svg", desc:"Bundler" },
];

export default function Tech() {
  const scrollRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const scroller = scrollRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!scroller || !left || !right) return;

    const step = 240;
    const goLeft  = () => scroller.scrollBy({ left: -step, behavior: "smooth" });
    const goRight = () => scroller.scrollBy({ left:  step, behavior: "smooth" });
    left.addEventListener("click", goLeft);
    right.addEventListener("click", goRight);

    return () => {
      left.removeEventListener("click", goLeft);
      right.removeEventListener("click", goRight);
    };
  }, []);

return (
  <Section id="tech" title="Technologies" subtitle="Mon stack principal.">
    <div className="flex items-end justify-between gap-3 mb-3">
      <div />
      <div className="flex gap-2">
        <button ref={leftRef}  className="tech-ctrl" aria-label="Défiler à gauche">‹</button>
        <button ref={rightRef} className="tech-ctrl" aria-label="Défiler à droite">›</button>
      </div>
    </div>

    <div className="tech-viewport">
      <div ref={scrollRef} className="tech-scroll">
        <div className="tech-track">
          {TECH.concat(TECH).map((t, i) => (
            <div key={t.name + "-" + i} className="tech-card">
              <div className="tech-icon-wrap">
                <LazyImage src={t.img} alt={t.name} width={76} height={96} className="w-16 h-10 rounded bg-white/70 dark:bg-white/10 p-2" />
              </div>
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-[11px] opacity-70">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
}
