import Section from "../Services";

export default function ServicesSkeleton() {
  return (
    <Section
      id="services"
      title="Services"
      subtitle="Ce que je fais le mieux, avec un focus qualité."
      loading
      className=""
    >
      {/* chips skeleton */}
      <div className="mb-6 hidden sm:flex items-center gap-2">
        <div className="skel h-6 w-20 rounded" />
        <div className="skel h-6 w-20 rounded" />
        <div className="skel h-6 w-16 rounded" />
      </div>

      {/* grille de cartes skeleton (mêmes dimensions qu'une card-modern) */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <article key={i} className="card-modern p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="skel h-10 w-10 rounded-md" aria-hidden />
              <div className="skel h-5 w-40 rounded" />
            </div>
            <div className="space-y-2">
              <div className="skel h-4 w-full rounded" />
              <div className="skel h-4 w-5/6 rounded" />
              <div className="skel h-4 w-3/4 rounded" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="skel h-6 w-16 rounded" />
              <div className="skel h-6 w-20 rounded" />
              <div className="skel h-6 w-14 rounded" />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
