import Section from "../../layout/section";

/**
 * Skeleton pour Experience — même layout (timeline + sidebar)
 * que la version finale : xp-grid / xp-main / xp-side / xp-card…
 * On réutilise les classes .xp-* et les utilitaires .skel existants.
 */
export default function ExperienceSkeleton() {
  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="A journey through my professional growth and the impact I’ve made."
      loading
    >
      <div className="xp-grid">
        {/* COLONNE GAUCHE : TIMELINE */}
        <div className="xp-main">
          <div className="xp-line" />

          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="xp-wrap">
              <div className="xp-dot" />
              <article className="xp-card">
                {/* header */}
                <div className="xp-head">
                  <div className="flex-1">
                    <div className="skel h-4 w-56 rounded mb-2" />
                    <div className="flex gap-3">
                      <div className="skel h-3 w-28 rounded" />
                      <div className="skel h-3 w-24 rounded" />
                    </div>
                  </div>
                  <div className="xp-right">
                    <div className="skel h-7 w-32 rounded-full" />
                    <div className="skel h-7 w-16 rounded-full" />
                  </div>
                </div>

                {/* summary */}
                <div className="skel h-3 w-4/5 rounded mt-3" />
                <div className="skel h-3 w-3/5 rounded mt-2" />

                {/* achievements */}
                <div className="mt-3 space-y-2">
                  <div className="skel h-3 w-11/12 rounded" />
                  <div className="skel h-3 w-10/12 rounded" />
                  <div className="skel h-3 w-9/12 rounded" />
                </div>

                {/* stack badges */}
                <div className="xp-badges mt-3">
                  <div className="skel h-6 w-16 rounded-full" />
                  <div className="skel h-6 w-14 rounded-full" />
                  <div className="skel h-6 w-12 rounded-full" />
                  <div className="skel h-6 w-20 rounded-full" />
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* COLONNE DROITE : SIDEBAR */}
        <div className="xp-side">
          {/* Certifications */}
          <aside className="xp-side-card">
            <div className="skel h-4 w-40 rounded mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="skel h-3 w-56 rounded" />
                  <div className="skel h-3 w-10 rounded" />
                </div>
              ))}
            </div>
          </aside>

          {/* Quick Stats */}
          <aside className="xp-side-card">
            <div className="skel h-4 w-28 rounded mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="skel h-3 w-40 rounded" />
                  <div className="skel h-3 w-8 rounded" />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </Section>
  );
}
