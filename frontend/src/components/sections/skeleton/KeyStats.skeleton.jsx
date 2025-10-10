import Section from "../../layout/section";

export default function KeyStatsSkeleton() {
  return (
    <Section id="stats" title="Chiffres clés" subtitle="Quelques indicateurs rapides." loading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5 text-center" >
            <div className="skel h-8 w-24 mx-auto rounded mb-2" />
            <div className="skel h-3 w-28 mx-auto rounded" />
          </div>
        ))}
      </div>
    </Section>
  );
}
