import Section from "../section";
import Reveal from "../Reveal";
import ProgressBar from "../ProgressBar";

export default function Skills() {
  const items = [
    { label: "Laravel", value: 85 },
    { label: "React", value: 80 },
    { label: "Tailwind", value: 85 },
    { label: "MySQL", value: 75 },
    { label: "Sécurité / Auth", value: 70 },
    { label: "Tests & Qualité", value: 65 },
  ];
  return (
    <Section id="skills" title="Compétences" subtitle="Tech principales avec niveau indicatif.">
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((it, i) => (
          <Reveal key={it.label} y={8} delay={i * 0.04}>
            <ProgressBar label={it.label} value={it.value} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
