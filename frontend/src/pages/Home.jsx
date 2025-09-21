import { Helmet } from "react-helmet-async";
import Section from "../components/Section";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import { motion as Motion } from "framer-motion";

export default function Home() {
  const { data: projects } = useQuery({
    queryKey: ["home-projects"],
    queryFn: async () => (await api.get("/api/projects")).data,
  });
  const recent = Array.isArray(projects) ? projects.slice(0, 6) : [];

  return (
    <>
      <Helmet>
        <title>Hamza Bernoussi • Full-Stack Developer</title>
        <meta name="description" content="Portfolio landing page, noir + jaune foncé, animations sobres." />
      </Helmet>

      {/* HERO */}
      <section id="hero" className="py-10 sm:py-16">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <Motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .4 }}
              className="text-3xl sm:text-4xl font-extrabold leading-tight"
            >
              Salut, je suis <span className="text-accent-500">Hamza</span><br />
              Développeur Full-Stack.
            </Motion.h1>
            <p className="mt-3 opacity-80">
              J’aime construire des apps modernes, rapides et bien pensées.
              Laravel • React • Tailwind • Sécurité • Qualité.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 rounded-lg bg-[var(--accent)] text-black hover:shadow-glow">
                Voir mes projets
              </a>
              <a href="#contact" className="px-4 py-2 rounded-lg border border-white/15 hover:bg-white/10">
                Me contacter
              </a>
            </div>
          </div>

          <Motion.div
            initial={{ opacity: 0, scale: .96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4, delay: .05 }}
            className="relative"
          >
            <img
              src="https://picsum.photos/seed/hamza/640/760"
              alt="Portrait de Hamza"
              className="rounded-2xl w-full h-auto object-cover border border-white/10 shadow-card"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-xl bg-accent-500/20 blur-2xl -z-10"></div>
          </Motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <Section id="services" title="Ce que je fais" subtitle="Qualité, performance et design.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { t: "Apps Web", d: "Laravel / React / Tailwind / MySQL" },
            { t: "APIs & Sécurité", d: "Validation stricte, bonnes pratiques, CORS" },
            { t: "UI/UX", d: "Interfaces modernes, accessibles, animations" },
          ].map((s) => (
            <Card key={s.t} className="p-4">
              <h3 className="font-semibold">{s.t}</h3>
              <p className="opacity-80 text-sm mt-1">{s.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Mes projets" subtitle="Sélection récente (lazy images).">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recent.map((p) => (
            <a
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:shadow-glow transition block focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              aria-label={`Voir le projet ${p.title}`}
            >
              {p.cover_url && (
                <img
                  src={p.cover_url}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-40 object-cover transition group-hover:opacity-95"
                />
              )}
              <div className="p-4">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="opacity-70 text-sm line-clamp-2">{p.summary}</p>
              </div>
            </a>
          ))}
          {recent.length === 0 && <p className="opacity-70">Ajoute des projets publiés pour les voir ici.</p>}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Compétences" subtitle="Tech principales avec niveau indicatif.">
        <div className="grid sm:grid-cols-2 gap-6">
          <ProgressBar label="Laravel" value={85} />
          <ProgressBar label="React" value={80} />
          <ProgressBar label="Tailwind" value={85} />
          <ProgressBar label="MySQL" value={75} />
          <ProgressBar label="Sécurité / Auth" value={70} />
          <ProgressBar label="Tests & Qualité" value={65} />
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Expérience & Formation" subtitle="Parcours rapide.">
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-1">Expérience</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Freelance — Full-Stack (2025-…)</li>
              <li>• Projets persos — SaaS / Portfolio</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold mb-1">Formation</h3>
            <ul className="text-sm opacity-80 space-y-1">
              <li>• Master MASI — Ingénierie Logicielle</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" subtitle="Discutons de ton projet.">
        <Card className="p-4">
          <p className="opacity-80 text-sm">Envoyez-moi un message :</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a className="px-4 py-2 rounded-lg bg-[var(--accent)] text-black hover:shadow-glow" href="mailto:hamza@example.com">Email</a>
            <a className="px-4 py-2 rounded-lg border border-white/15 hover:bg-white/10" href="https://github.com/" target="_blank">GitHub</a>
            <a className="px-4 py-2 rounded-lg border border-white/15 hover:bg-white/10" href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
          </div>
        </Card>
      </Section>
    </>
  );
}
