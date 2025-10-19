import { useMemo, useState } from "react";
import Reveal from "../ui/Reveal";
import Section from "../layout/section";
import { PROJECTS } from "../../data/projets";
import ImageCarousel from "../ui/ImageCarousel";
import Lightbox from "../ui/Lightbox";

const STEP = 6;

function normalize(s = "") {
  return s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const [activeStacks, setActiveStacks] = useState([]); 
  const [sortBy, setSortBy] = useState("newest");      
  const [visible, setVisible] = useState(STEP);

  const [lbOpen, setLbOpen] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);
  const [lbImages, setLbImages] = useState([]);

  const allStacks = useMemo(() => {
    const set = new Set();
    PROJECTS.forEach(p => (p.stack || []).forEach(s => set.add(s)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const filtered = useMemo(() => {
  const q = normalize(query);

  let list = PROJECTS.filter(p => {
    const matchesQuery =
      !q ||
      normalize(p.title).includes(q) ||
      normalize(p.summary).includes(q) ||
      (p.stack || []).some(s => normalize(s).includes(q));

    const matchesStacks =
      activeStacks.length === 0 ||
      (p.stack || []).some(s => activeStacks.includes(s));

    return matchesQuery && matchesStacks;
  });

  if (sortBy === "title") {
    list = list.slice().sort((a, b) => a.title.localeCompare(b.title));
  } else {
    list = list.slice(); 
  }
  return list;
  }, [query, activeStacks, sortBy]);


  const hasMore = filtered.length > visible;
  const visibleProjects = filtered.slice(0, visible);

  const toggleStack = (tag) =>
    setActiveStacks((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const openZoom = (images, index) => {
    setLbImages(images || []);
    setLbIdx(index || 0);
    setLbOpen(true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => setVisible(STEP), [query, activeStacks, sortBy]);

  const expanded = visible > STEP;
  const canCollapse = filtered.length > STEP && expanded;

  return (
    <Section id="projects" title="Recent Projects" subtitle={`${filtered.length} projet(s) — filter by stack, search, sort.`} >
      {/* Toolbar */}
      <div className="proj-toolbar">
        <input className="searchbox" type="search" placeholder="Search a project…" value={query} onChange={(e) => setQuery(e.target.value)}
          aria-label="Search a project" />
        <div className="flex flex-wrap gap-2">
          {allStacks.map((s) => {
            const active = activeStacks.includes(s);
            return (
              <button key={s} type="button" className={`chip ${active ? "chip-active" : ""}`} onClick={() => toggleStack(s)} aria-pressed={active}
                aria-label={`Filter by ${s}`} >
                {s}
              </button>
            );
          })}
        </div>
        <div className="flex-1" />
        <select className="sorter" value={sortBy} onChange={(e) => setSortBy(e.target.value)} aria-label="Sort projects" >
          <option value="newest">Newest</option>
          <option value="title">Title (A→Z)</option>
        </select>
      </div>

      {/* Liste */}
      {visibleProjects.length === 0 ? (
        <p className="muted">No results. Try removing some filters or adjust your search.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((p, idx) => (
            <Reveal key={p.slug || idx} y={12} delay={idx * 0.04}>
              <article className="project-card group">
                <ImageCarousel images={p.images} alt={p.title} onZoom={(index) => openZoom(p.images, index)} />

                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="pr">{p.summary}</p>

                  <div className="project-tags">
                    {(p.stack || []).slice(0, 6).map((s, i) => (
                      <span key={i} className="px-2 py-1 project-tag bg-slate-200/50 border border-white/10">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="icon-btn hover:text-[var(--accent)]" aria-label="View the code on GitHub" >
                        {/* icône GitHub */}
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                          <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.76.08-.75.08-.75 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.77-1.61-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.61-5.49 5.91.43.37.82 1.09.82 2.21v3.27c0 .32.22.68.83.57A12 12 0 0 0 12 .5Z"/>
                        </svg>
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="icon-btn hover:text-[var(--accent)]" aria-label="View live demo" >
                        {/* icône “lien” */}
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 3h6v6m0-6L10 14" strokeLinecap="round" />
                          <path d="M21 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" strokeLinecap="round" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}

      {/* Afficher plus / moins */}
      {(hasMore || canCollapse) && (
        <div className="flex justify-center mt-6">
          {!expanded && hasMore && (
            <button type="button" onClick={() => setVisible(v => v + STEP)} className="more-pill" >
              Show more
            </button>
          )}

          {canCollapse && (
            <button type="button" onClick={() => { setVisible(STEP);
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="more-pill">
              Show less
            </button>
          )}
        </div>
      )}

      {/* Lightbox */}
      <Lightbox open={lbOpen} images={lbImages} index={lbIdx} onClose={() => setLbOpen(false)} />
    </Section>
  );
}
