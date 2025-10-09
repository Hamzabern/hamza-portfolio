import Section from "../../layout/section";

export default function ExperienceSkeleton() {
  return (
    <Section id="experience" title="Expérience & Formation" subtitle="Parcours rapide." loading>
      <div className="relative pl-5">
        {/* ligne verticale */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-black/10 dark:bg-white/10" />
        <div className="space-y-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="relative">
              {/* puce */}
              <div className="absolute -left-0.5 top-1.5 h-3 w-3 rounded-full bg-[var(--accent)]/70" />
              {/* carte */}
              <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-4">
                <div className="skel h-3 w-24 mb-2 rounded" />
                <div className="skel h-4 w-2/3 mb-2 rounded" />
                <div className="skel h-4 w-5/6 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
