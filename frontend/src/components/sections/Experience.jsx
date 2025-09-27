import Section from "../section";
import Card from "../Card";
import Reveal from "../Reveal";

const ITEMS = [
  {
    period: "2025 — …",
    title: "Freelance — Full-Stack",
    desc: "Apps Laravel/React, intégrations API, qualité & perfs.",
  },
  {
    period: "2024 — 2025",
    title: "Projets persos — SaaS / Portfolio",
    desc: "Design system Tailwind, SEO, déploiements.",
  },
  {
    period: "Master MASI",
    title: "Ingénierie Logicielle",
    desc: "Conception, archi, tests & qualité logicielle.",
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Expérience & Formation" subtitle="Parcours rapide." >
      <div className="relative pl-5">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-black/10 dark:bg-white/10" />
        <div className="space-y-5">
          {ITEMS.map((it, i) => (
            <Reveal key={i} y={10} delay={i * 0.06}>
              <div className="relative">
                <div className="absolute -left-0.5 top-1.5 h-3 w-3 rounded-full bg-[var(--accent)] shadow-accent" />
                <Card className="p-4">
                  <div className="text-xs opacity-70">{it.period}</div>
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="opacity-80 text-sm">{it.desc}</p>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
