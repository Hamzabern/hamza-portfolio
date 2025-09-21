import { Helmet } from "react-helmet-async";
import Section from "../components/section";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
        <meta
          name="description"
          content="Portfolio landing page noir + jaune foncé, animations sobres, projets et compétences."
        />
      </Helmet>

      {/* HERO */}
      <section id="hero" className="py-10 sm:py-16">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <Motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl font-extrabold leading-tight"
            >
              Salut, je suis <span className="text-[var(--accent)]">Hamza</span>
              <br />
              Développeur Full-Stack.
            </Motion.h1>
            <p className="mt-3 opacity-80">
              J’aime construire des apps modernes, rapides et bien pensées.
              Laravel • React • Tailwind • Sécurité • Qualité.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                Voir mes projets
              </a>
              <a href="#contact" className="btn-outline">
                Me contacter
              </a>
            </div>
          </div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="relative"
          >
            <img
              src="https://picsum.photos/seed/hamza/640/760"
              alt="Portrait de Hamza"
              className="rounded-2xl w-full h-auto object-cover border border-black/10 dark:border-white/10 shadow-accent"
              loading="lazy"
              decoding="async"
            />
          </Motion.div>
        </div>

        {/* Highlights */}
        <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
          {[
            "⚡ Performance & accessibilité",
            "🔐 API solides & sécurité",
            "🎨 UI propre & animations sobres",
          ].map((t) => (
            <div
              key={t}
              className="rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 bg-white/50 dark:bg-white/5"
            >
              {t}
            </div>
          ))}
        </div>
        <div className="my-8 divider-accent" />
      </section>

      {/* SERVICES */}
      <Section
        id="services"
        title="Ce que je fais"
        subtitle="Qualité, performance et design."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { t: "Apps Web", d: "Laravel / React / Tailwind / MySQL" },
            {
              t: "APIs & Sécurité",
              d: "Validation stricte, bonnes pratiques, CORS",
            },
            {
              t: "UI/UX",
              d: "Interfaces modernes, accessibles, animations",
            },
            { t: "Optimisation & SEO", d: "Visibilité & performance web" },
          ].map((s) => (
            <Card key={s.t} className="p-4">
              <h3 className="font-semibold">{s.t}</h3>
              <p className="opacity-80 text-sm mt-1">{s.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Mes projets"
        subtitle="Sélection récente (lazy images)."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recent.map((p) => (
            <a
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm overflow-hidden hover:shadow-accent transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              aria-label={`Voir le projet ${p.title}`}
            >
              {p.cover_url && (
                <img
                  src={p.cover_url}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 object-cover transition group-hover:opacity-95 shadow-accent"
                />
              )}
              <div className="p-4">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="opacity-70 text-sm line-clamp-2">{p.summary}</p>
              </div>
            </a>
          ))}
          {recent.length === 0 && (
            <p className="opacity-70">Ajoute des projets publiés pour les voir ici.</p>
          )}
        </div>
      </Section>

      {/* TECHNOLOGIES */}
      <Section id="tech" title="Technologies" subtitle="Mon stack principal.">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-sm">
          {[
            "Laravel",
            "React",
            "Tailwind",
            "MySQL",
            "Git/GitHub",
            "Docker (base)",
          ].map((x) => (
            <div
              key={x}
              className="rounded-lg border border-black/10 dark:border-white/10 px-3 py-3 text-center bg-white/60 dark:bg-white/5 hover:shadow-accent transition"
            >
              {x}
            </div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        title="Compétences"
        subtitle="Tech principales avec niveau indicatif."
      >
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
      <Section
        id="experience"
        title="Expérience & Formation"
        subtitle="Parcours rapide."
      >
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

      {/* TESTIMONIALS */}
      <Section
        id="testimonials"
        title="Ce qu’on dit"
        subtitle="Avis de clients/collaborateurs."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              a: "Yassine — PM",
              t: "Livraison propre, code clair, très réactif.",
            },
            {
              a: "Sara — Dev",
              t: "Excellente intégration front/back, super communication.",
            },
            {
              a: "Amine — Client",
              t: "Rapide, pro, et design soigné. Je recommande !",
            },
          ].map((q) => (
            <Card key={q.a} className="p-4">
              <p className="text-sm">“{q.t}”</p>
              <div className="mt-2 text-xs opacity-70">— {q.a}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        id="cta"
        title="Prêt à discuter ?"
        subtitle="Je peux t’aider à lancer ou améliorer ton application."
      >
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-white/5 flex flex-wrap items-center gap-3 justify-between hover:shadow-accent transition">
          <div className="text-sm opacity-80">
            Disponibilité freelance/mission — réponse rapide.
          </div>
          <div className="flex gap-2">
            <a href="#contact" className="btn-primary">
              Me contacter
            </a>
            <a href="#projects" className="btn-outline">
              Voir des exemples
            </a>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" subtitle="Discutons de ton projet.">
    <Card className="p-6 space-y-4">
      {/* Formulaire email */}
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm mb-1">Nom</label>
          <input type="text" className="w-full px-3 py-2 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-black/30"
            placeholder="Ton nom" required/>
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-black/30"
            placeholder="ton@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            rows="4"
            className="w-full px-3 py-2 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-black/30"
            placeholder="Ton message..."
            required
          />
        </div>
        <button type="submit" className="btn-primary">Envoyer</button>
      </form>

      {/* Icônes socials (GitHub / LinkedIn) */}
      <div className="flex items-center gap-4 text-2xl mt-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-[var(--accent)]"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-[var(--accent)]"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </Card>
</Section>

    </>
  );
}
