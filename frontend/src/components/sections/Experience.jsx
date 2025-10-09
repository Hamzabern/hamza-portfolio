// import Section from "../layout/section";
// import Card from "../ui/Card";
// import Reveal from "../ui/Reveal";

// const ITEMS = [
//   {
//     period: "2025 — …",
//     title: "Freelance — Full-Stack",
//     desc: "Apps Laravel/React, intégrations API, qualité & perfs.",
//   },
//   {
//     period: "2024 — 2025",
//     title: "Projets persos — SaaS / Portfolio",
//     desc: "Design system Tailwind, SEO, déploiements.",
//   },
//   {
//     period: "Master MASI",
//     title: "Ingénierie Logicielle",
//     desc: "Conception, archi, tests & qualité logicielle.",
//   },
// ];

// export default function Experience() {
//   return (
//     <Section id="experience" title="Expérience & Formation" subtitle="Parcours rapide." >
//       <div className="relative pl-5">
//         <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-black/10 dark:bg-white/10" />
//         <div className="space-y-5">
//           {ITEMS.map((it, i) => (
//             <Reveal key={i} y={10} delay={i * 0.06}>
//               <div className="relative">
//                 <div className="absolute -left-0.5 top-1.5 h-3 w-3 rounded-full bg-[var(--accent)] shadow-accent" />
//                 <Card className="p-4">
//                   <div className="text-xs opacity-70">{it.period}</div>
//                   <h3 className="font-semibold">{it.title}</h3>
//                   <p className="opacity-80 text-sm">{it.desc}</p>
//                 </Card>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }
import Section from "../layout/section";
import Reveal from "../ui/Reveal";

const EXPERIENCES = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 – Present",
    contract: "Full-time",
    summary:
      "Lead d’une équipe de 5 devs sur un SaaS scalable (microservices) desservant 100k+ users.",
    achievements: [
      "-40% sur le temps de chargement via optimisation perfs.",
      "CI/CD mis en place (-60% sur temps de déploiement).",
      "Mentorat juniors + revues de code systématiques.",
    ],
    stack: ["React", "Node.js", "AWS", "MongoDB", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2020 – 2022",
    contract: "Full-time",
    summary:
      "MVP fintech de A à Z (web app responsive + APIs REST). Plateforme 10k+ utilisateurs.",
    achievements: [
      "Intégration paiements (Stripe/PayPal).",
      "Monitoring temps-réel des transactions.",
      "Système de notifications et rôles.",
    ],
    stack: ["Vue.js", "Laravel", "PostgreSQL", "Redis", "Kubernetes"],
  },
];

const CERTS = [
  { label: "AWS Certified Solutions Architect", year: "2023" },
  { label: "Google Cloud Professional Developer", year: "2022" },
  { label: "MongoDB Certified Developer", year: "2021" },
  { label: "React Developer Certification", year: "2020" },
];

const STATS = [
  { label: "Years of Experience", value: "5+" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Technologies Mastered", value: "20+" },
  { label: "Client Satisfaction", value: "98%" },
];

function CalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  );
}
function OfficeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 21V7a2 2 0 0 1 2-2h8l8 8v8H3z"/><path d="M13 7v4h4"/>
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2"/>
    </svg>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Professional Experience" subtitle="A journey through my professional growth and the impact I’ve made." >
      <div className="exp-grid">
        {/* COLONNE GAUCHE : TIMELINE */}
        <div className="exp-main">
          <div className="exp-line" />
          {EXPERIENCES.map((xp, i) => (
            <Reveal key={i} y={10} delay={i * 0.05}>
              <div className="exp-card-wrap">
                <div className="exp-dot" />
                <article className="exp-card">
                  <header className="exp-head">
                    <div className="flex-1">
                      <h3 className="exp-title">{xp.title}</h3>
                      <div className="exp-meta">
                        <span className="inline-flex items-center gap-1">
                          <OfficeIcon /> {xp.company}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <PinIcon /> {xp.location}
                        </span>
                      </div>
                    </div>

                    {/* ⬇️ remplace l'ancien bloc par celui-ci */}
                    <div className="exp-head-right">
                      <div className="pill">
                        <CalIcon /> {xp.period}
                      </div>
                      <div className="pill">{xp.contract}</div>
                    </div>
                  </header>

                  {xp.summary && <p className="mt-3 text-sm opacity-90">{xp.summary}</p>}

                  {xp.achievements?.length ? (
                    <ul className="exp-list">
                      {xp.achievements.map((a, k) => <li key={k}>{a}</li>)}
                    </ul>
                  ) : null}

                  {xp.stack?.length ? (
                    <div className="exp-badges">
                      {xp.stack.map((t, k) => <span key={k} className="exp-badge">{t}</span>)}
                    </div>
                  ) : null}
                </article>
              </div>
            </Reveal>
          ))}
        </div>

        {/* COLONNE DROITE : SIDEBAR */}
        <div className="exp-side">
          <aside className="side-card">
            <h4 className="side-title">
              {/* petite icône ruban/certif */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 15a6 6 0 1 0-6-6 6 6 0 0 0 6 6Z" /><path d="m11 21-1-4 2 1 2-1-1 4-1-.5-1 .5Z"/>
              </svg>
              Certifications
            </h4>
            <div className="mt-3">
              {CERTS.map((c, i) => (
                <div key={i} className="side-item">
                  <span className="opacity-90">{c.label}</span>
                  <span className="opacity-60 text-xs">{c.year}</span>
                </div>
              ))}
            </div>
          </aside>

          <aside className="side-card">
            <h4 className="side-title">Quick Stats</h4>
            <div className="mt-3">
              {STATS.map((s, i) => (
                <div key={i} className="side-item">
                  <span className="opacity-90">{s.label}</span>
                  <span className="font-semibold">{s.value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </Section>
  );
}
