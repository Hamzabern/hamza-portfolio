import Section from "../../layout/section";

export default function ProjectsSkeleton() {
  return (
    <Section id="projects" title="Projets récents" subtitle="Sélection des 6 derniers." loading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <article key={i} className="project-card">
            <div className="skel h-44 w-full" />
            <div className="project-body">
              <div className="skel h-5 w-2/3 rounded mb-2" />
              <div className="skel h-4 w-full rounded mb-1" />
              <div className="skel h-4 w-5/6 rounded" />
              <div className="flex gap-2 mt-3">
                <div className="skel h-6 w-16 rounded" />
                <div className="skel h-6 w-14 rounded" />
                <div className="skel h-6 w-20 rounded" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
