import { useQuery } from "@tanstack/react-query";
import { api, ensureArray } from "../../lib/api";
import Reveal from "../../components/Reveal";
import Section from "../../components/section";


export default function Projects() {
  const { data } = useQuery({
    queryKey: ["home-projects"],
    queryFn: async () => (await api.get("/projects")).data,
  });

  const projects = ensureArray(data).slice(0, 6);

  return (
  <Section id="projects" title="Projets récents" subtitle="Sélection des 6 derniers.">
      {projects.length === 0 && (
        <p className="opacity-80">Ajoute des projets publiés pour les voir ici.</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => {
          const github = p.github_url || p.github || p.repo_url || "";
          const live   = p.demo_url   || p.live_url || p.url      || "";

          return (
            <Reveal key={p.slug || idx} y={12} delay={idx * 0.05}>
              <div className="project-card hover:shadow-accent">
                {p.cover_url && (
                  <img src={p.cover_url} alt={p.title} className="project-media transition group-hover:scale-105" loading="lazy" decoding="async" />
                )}

                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="pr">{p.summary}</p>

                  <div className="project-tags">
                    {(p.stack || []).slice(0, 4).map((s, i) => (
                      <span key={i} className="px-2 py-1 project-tag bg-slate-200/50 border border-white/10 ">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <a href={github || undefined} target="_blank" rel="noreferrer" className={`icon-btn hover:text-[var(--accent)] ${github ? "" : "icon-btn--disabled"}`}
                      aria-label="Voir le code sur GitHub" title={github ? "GitHub (source)" : "Source Code"} >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                        <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.76.08-.75.08-.75 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.77-1.61-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.61-5.49 5.91.43.37.82 1.09.82 2.21v3.27c0 .32.22.68.83.57A12 12 0 0 0 12 .5Z"/>
                      </svg>
                    </a>

                    <a href={live || undefined} target="_blank" rel="noreferrer" className={`icon-btn hover:text-[var(--accent)] ${live ? "" : "icon-btn--disabled"}`}
                      aria-label="Voir la démo live" title={live ? "Live demo" : "Démo"} >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M15 3h6v6m0-6L10 14" strokeLinecap="round" />
                        <path d="M21 13v6a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h6" strokeLinecap="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
