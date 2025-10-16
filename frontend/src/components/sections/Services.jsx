import Section from "../layout/section";

const items = [
  {
    title: "Websites & Portfolios",
    desc: "Fast landing pages, basic SEO, subtle animations.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18"/><path d="M7 5v4"/>
      </svg>
    ),
    chips: ["Vite/Tailwind", "Responsive", "Deployment"],
  },
  {
    title: "Web Apps & APIs",
    desc: "Robust Laravel backend + clean React frontend, strict validation.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2"/><path d="M9 9h6"/><path d="M9 13h6"/>
      </svg>
    ),
    chips: ["Laravel REST", "Auth & roles", "Basic tests"],
  },
  {
    title: "Integrations & Performance",
    desc: "Third-party service integrations, UX/performance optimizations and metrics.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/><path d="M19.4 15a7.5 7.5 0 0 0 0-6M4.6 9a7.5 7.5 0 0 0 0 6"/>
      </svg>
    ),
    chips: ["Analytics", "Lighthouse", "Simple CI/CD"],
  },
];

export default function Services() {
  return (
    <Section id="services" title="Services" subtitle="What I do best, with a focus on quality.">
      <div className="mb-6 hidden sm:flex items-center gap-2 sd-stagger">
        <span className="chip sd-fade-up"><span className="chip-dot" /> Quality</span>
        <span className="chip sd-fade-up"><span className="chip-dot" /> Performance</span>
        <span className="chip sd-fade-up"><span className="chip-dot" /> SEO</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sd-stagger">
        {items.map((s) => (
          <article key={s.title} className="card-modern shine p-5 sd-fade-up">
            <div className="flex items-center gap-3 mb-3">
              <div className="icon-wrap" aria-hidden="true">{s.icon}</div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
            </div>
            <p className="opacity-80 text-sm">{s.desc}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.chips.map((c) => (
                <li key={c} className="chip">
                  <span className="chip-dot" aria-hidden="true" /> {c}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
