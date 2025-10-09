import Section from "../../layout/section";

export default function SkillsSkeleton() {
  return (
    <Section id="skills" title="Compétences" subtitle="Tech principales avec niveau indicatif." loading>
      <div className="grid sm:grid-cols-2 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="skel h-4 w-24 rounded" />
            <div className="skel h-3 w-full rounded" />
          </div>
        ))}
      </div>
    </Section>
  );
}
