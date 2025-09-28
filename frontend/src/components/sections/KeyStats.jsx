import Section from "../section";
import Reveal from "../Reveal";
import CountUp from "../CountUp";

const STATS = [
  { label: "Projets livrés", value: 18, suffix: "+" },
  { label: "Satisfaction", value: 98, suffix: "%" },
  { label: "Temps moyen de réponse", value: 24, suffix: "h" },
  { label: "Technos maîtrisées", value: 8, suffix: "+" },
];

export default function KeyStats() {
  return (
    <Section id="stats" title="Chiffres clés" subtitle="Quelques indicateurs rapides.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} y={8} delay={i * 0.05}>
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5 text-center shadow-accent hover:shadow-accent transition">
              <div className="text-3xl font-extrabold text-[var(--accent)] tracking-tight">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm opacity-80">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
