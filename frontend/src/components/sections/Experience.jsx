import { useState } from "react";
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
      "Lead d’une équipe de 5 devs sur un SaaS scalable (microservices) 100k+ users.",
    achievements: [
      "-40% sur le temps de chargement via optimisation perfs",
      "CI/CD mise en place (-60% sur temps de déploiement)",
      "Mentorat juniors + revues de code"
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
      "Intégration paiements (Stripe/PayPal)",
      "Monitoring temps-réel des transactions",
      "Système de notifications et rôles"
    ],
    stack: ["Vue.js", "Laravel", "PostgreSQL", "Redis", "Kubernetes"],
  },
  {
    title: "Software Engineer Intern",
    company: "CloudSys",
    location: "Remote",
    period: "2019 – 2020",
    contract: "Internship",
    summary:
      "Contribution à un outil de gestion d’infrastructure cloud.",
    achievements: [
      "Mise en place scripts automatisés",
      "Documentation technique et intégration CI",
    ],
    stack: ["Python", "Flask", "Docker"],
  },
  {
    title: "Academic Project — MASI Master",
    company: "Université EMSI",
    location: "Casablanca, MA",
    period: "2018 – 2019",
    contract: "Academic",
    summary:
      "Projet universitaire de fin d’études sur l’architecture logicielle.",
    achievements: [
      "Modélisation UML, gestion de projet agile",
      "Rapport de conception et soutenance",
    ],
    stack: ["Java", "UML", "Spring"],
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
  const [visible, setVisible] = useState(2);
  const STEP = 2;
  const total = EXPERIENCES.length;
  const shown = EXPERIENCES.slice(0, visible);

  return (
    <Section id="experience" title="Professional Experience" subtitle="A journey through my professional growth and the impact I’ve made.">
      <div className="xp-grid">
        {/* Timeline */}
        <div className="xp-main">
          <div className="xp-line" />
          {shown.map((xp, i) => (
            <Reveal key={i} y={10} delay={i * 0.05}>
              <div className="xp-wrap">
                <div className="xp-dot" />
                <article className="xp-card">
                  <header className="xp-head">
                    <div className="flex-1">
                      <h3 className="xp-title">{xp.title}</h3>
                      <div className="xp-meta">
                        <span className="inline-flex items-center gap-1">
                          <OfficeIcon /> {xp.company}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <PinIcon /> {xp.location}
                        </span>
                      </div>
                    </div>
                    <div className="xp-right">
                      <div className="xp-pill"><CalIcon /> {xp.period}</div>
                      <div className="xp-pill">{xp.contract}</div>
                    </div>
                  </header>

                  {xp.summary && <p className="xp-summary">{xp.summary}</p>}

                  {xp.achievements?.length ? (
                    <ul className="xp-list">
                      {xp.achievements.map((a, k) => <li key={k}>{a}</li>)}
                    </ul>
                  ) : null}

                  {xp.stack?.length ? (
                    <div className="xp-badges">
                      {xp.stack.map((t, k) => (
                        <span key={k} className="xp-badge">{t}</span>
                      ))}
                    </div>
                  ) : null}
                </article>
              </div>
            </Reveal>
          ))}

          {total > 2 && (
            <div className="pt-2">
              {visible < total ? (
                <button type="button" className="xp-more-btn" onClick={() => setVisible(v => Math.min(total, v + STEP))}>
                  Afficher plus
                </button>
              ) : (
                <button type="button" className="xp-more-btn" onClick={() => setVisible(2)}>
                  Afficher moins
                </button>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="xp-side">
          <aside className="xp-side-card">
            <h4 className="xp-side-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 15a6 6 0 1 0-6-6 6 6 0 0 0 6 6Z" /><path d="m11 21-1-4 2 1 2-1-1 4-1-.5-1 .5Z"/>
              </svg>
              Certifications
            </h4>
            <div className="mt-3">
              {CERTS.map((c, i) => (
                <div key={i} className="xp-side-row">
                  <span className="opacity-90">{c.label}</span>
                  <span className="opacity-60 text-xs">{c.year}</span>
                </div>
              ))}
            </div>
          </aside>

          <aside className="xp-side-card">
            <h4 className="xp-side-title">Quick Stats</h4>
            <div className="mt-3">
              {STATS.map((s, i) => (
                <div key={i} className="xp-side-row">
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
