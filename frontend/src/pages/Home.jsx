import Section from "../components/section";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import { useInView, motion as Motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";

import { useRef, useState, useEffect } from "react";

function AnimatedNumber({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1200; 
    const start = performance.now();
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      setValue(Math.round(easeOutCubic(p) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <div ref={ref} className="text-3xl font-extrabold text-[var(--accent)]">
      {value}{suffix}
    </div>
  );
}


export default function Home() {
return (
  <>
    {/* HERO Section */}
    <Hero />
      <div className="my-8 divider-accent" />

    {/* SERVICES Section */}
    <Services />

    {/* PROJECTS Section */}
    <Projects />

     {/* CTA */}
    <Section id="cta" title="Prêt à discuter ?" subtitle="Je peux t’aider à lancer ou améliorer ton application." >
      <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-white/5 flex flex-wrap items-center gap-3 justify-between hover:shadow-accent transition">
        <div className="text-sm opacity-80">
          Disponibilité freelance/mission — réponse rapide.
        </div>
        <div className="flex gap-2">
          <a href="#contact" className="btn-primary btn-attention">
            Me contacter
          </a>
          <a href="#projects" className="btn-outline">
            Voir des exemples
          </a>
        </div>
      </div>
    </Section>

    {/* TECHNOLOGIES */}
    <Section id="tech" title="Technologies" subtitle="Mon stack principal.">
      <div className="tech-viewport">
        <div className="tech-track">
          {[ 
            { name:"Laravel",  img:"https://laravel.com/img/logomark.min.svg",                       desc:"Backend & API" },
            { name:"React",    img:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", desc:"SPA Frontend" },
            { name:"Tailwind", img:"https://tailwindcss.com/favicons/apple-touch-icon.png",         desc:"User Interface" },
            { name:"MySQL",    img:"https://www.mysql.com/common/logos/logo-mysql-170x115.png",     desc:"Base de données" },
            { name:"GitHub",   img:"https://github.githubassets.com/favicons/favicon.png",          desc:"VCS & CI" },
            { name:"Docker",   img:"https://www.docker.com/wp-content/uploads/2023/07/favicon.png", desc:"Conteneurs (base)" },
          ].concat([
            { name:"Laravel",  img:"https://laravel.com/img/logomark.min.svg",                       desc:"Backend & API" },
            { name:"React",    img:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", desc:"SPA Frontend" },
            { name:"Tailwind", img:"https://tailwindcss.com/favicons/apple-touch-icon.png",         desc:"User Interface" },
            { name:"MySQL",    img:"https://www.mysql.com/common/logos/logo-mysql-170x115.png",     desc:"Base de données" },
            { name:"GitHub",   img:"https://github.githubassets.com/favicons/favicon.png",          desc:"VCS & CI" },
            { name:"Docker",   img:"https://www.docker.com/wp-content/uploads/2023/07/favicon.png", desc:"Conteneurs (base)" },
          ]).map((t, i)=>(
            <div key={t.name+'-'+i} className="tech-card">
              <div className="tech-icon-wrap">
                <img src={t.img} alt={t.name} className="h-6 w-6 object-contain" loading="lazy" decoding="async" />
              </div>
              <div>
                <div className="tech-title">{t.name}</div>
                <div className="tech-desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
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
      <div className="relative pl-5">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-black/10 dark:bg-white/10"></div>

        <div className="space-y-5">
          {/* Item 1 */}
          <div className="relative">
            <div className="absolute -left-0.5 top-1.5 h-3 w-3 rounded-full bg-[var(--accent)] shadow-accent"></div>
            <Card className="p-4">
              <div className="text-xs opacity-70">2025 — …</div>
              <h3 className="font-semibold">Freelance — Full-Stack</h3>
              <p className="opacity-80 text-sm">Apps Laravel/React, intégrations API, qualité & perfs.</p>
            </Card>
          </div>

          {/* Item 2 */}
          <div className="relative">
            <div className="absolute -left-0.5 top-1.5 h-3 w-3 rounded-full bg-[var(--accent)] shadow-accent"></div>
            <Card className="p-4">
              <div className="text-xs opacity-70">2024 — 2025</div>
              <h3 className="font-semibold">Projets persos — SaaS / Portfolio</h3>
              <p className="opacity-80 text-sm">Design system Tailwind, SEO, déploiements.</p>
            </Card>
          </div>

          {/* Item 3 */}
          <div className="relative">
            <div className="absolute -left-0.5 top-1.5 h-3 w-3 rounded-full bg-[var(--accent)] shadow-accent"></div>
            <Card className="p-4">
              <div className="text-xs opacity-70">Master MASI</div>
              <h3 className="font-semibold">Ingénierie Logicielle</h3>
              <p className="opacity-80 text-sm">Conception, archi, tests & qualité logicielle.</p>
            </Card>
          </div>
        </div>
      </div>
    </Section>

    {/* TESTIMONIALS */}
    {/* <Section id="testimonials" title="Ce qu’on dit" subtitle="Avis de clients/collaborateurs." >
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
    </Section> */}

    {/* CTA (barre animée sobre) */}
    <Section id="cta2" title="Un projet en tête ?" subtitle="Voyons ensemble comment le réaliser.">
      <div className="relative rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 shadow-accent hover:shadow-accent transition overflow-hidden">
        {/* barre d’accent animée */}
        <Motion.div
          className="absolute left-0 top-0 h-0.5 w-full"
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
        />
        <h3 className="text-lg font-semibold">Disponible dès maintenant 🚀</h3>
        <p className="opacity-70 mt-1">Contacte-moi pour ton idée d’app web, SaaS ou portfolio.</p>
        <div className="mt-4 flex gap-3">
          <a href="#contact" className="btn-primary">Me contacter</a>
          <a href="#projects" className="btn-outline">Voir mes projets</a>
        </div>
      </div>
    </Section>

    {/* METRICS */}
    <Section id="metrics" title="Chiffres clés" subtitle="Un aperçu rapide.">
      <div className="grid sm:grid-cols-3 gap-4 text-center">
        {[
          { to: 15, suffix: "+", label: "Projets livrés" },
          { to: 95, suffix: "%", label: "Satisfaction clients" },
          { to: 3,  suffix: "j", label: "Temps moyen de livraison MVP" },
        ].map((m) => (
          <Card key={m.label} className="p-6 shadow-accent hover:shadow-accent transition">
            <AnimatedNumber to={m.to} suffix={m.suffix} />
            <div className="opacity-70 mt-1">{m.label}</div>
          </Card>
        ))}
      </div>
    </Section>

    <div className="my-8 divider-accent" />

    {/* CONTACT */}
    <Section id="contact" title="Contact" subtitle="Discutons de ton projet.">
      <Card className="p-6 space-y-4">
        {/* Icônes socials avec texte */}
        <div className="flex items-center justify-end gap-4 text-xl mt-2">
          <span className="text-sm opacity-80">Retrouve-moi sur :</span>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-[var(--accent)]" aria-label="GitHub" title="GitHub" >
            <svg viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.475 2 2 6.486 2 12.021c0 4.424 2.865 8.178 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.865-.014-1.698-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.109-1.463-1.109-1.463-.907-.62.069-.607.069-.607 1.003.071 1.53 1.03 1.53 1.03.892 1.53 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.221-.253-4.555-1.114-4.555-4.958 0-1.095.39-1.99 1.029-2.69-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.027A9.562 9.562 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.748-1.027 2.748-1.027.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.69 0 3.854-2.337 4.703-4.565 4.952.36.31.68.921.68 1.856 0 1.339-.012 2.419-.012 2.748 0 .268.18.58.688.481A9.523 9.523 0 0 0 22 12.02C22 6.486 17.523 2 12 2z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-[var(--accent)]" aria-label="LinkedIn" title="LinkedIn" >
            <svg viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor" aria-hidden="true">
              <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.24 8.25h4.52V23H.24zM8.339 8.25H12.7v2.007h.062c.607-1.152 2.093-2.368 4.307-2.368 4.61 0 5.462 3.036 5.462 6.984V23h-4.52v-6.548c0-1.562-.028-3.57-2.178-3.57-2.179 0-2.512 1.7-2.512 3.456V23H8.339z"/>
            </svg>
          </a>
        </div>
        {/* Formulaire email */}
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm mb-1">Nom</label>
            <input type="text" className="w-full px-3 py-2 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-black/30"
              placeholder="Ton nom"required/>
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full px-3 py-2 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-black/30"
              placeholder="ton@email.com" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea rows="4" className="w-full px-3 py-2 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-black/30"
              placeholder="Votre message...." required/>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-primary">Envoyer</button>
          </div>
        </form>
      </Card>
    </Section>
  </>
);}
