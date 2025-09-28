import Section from "../components/section";
import { motion as Motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Tech from "../components/sections/Tech";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import KeyStats from "../components/sections/KeyStats";
import Contact from "../components/sections/Contact";

export default function Home() {
return (
  <>
    {/* HERO Section */}
    <Hero />
      <div className="my-8 divider-accent" />

    {/* SERVICES Section */}
    <Services />

    {/* TECHNOLOGIES */}
    <Tech />

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

    {/* SKILLS */}
    <Skills />

    {/* EXPERIENCE */}
    <Experience />
    
    {/* CTA  */}
    <Section id="cta2" title="Un projet en tête ?" subtitle="Voyons ensemble comment le réaliser.">
      <div className="relative rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 shadow-accent hover:shadow-accent transition overflow-hidden">
        <Motion.div className="absolute left-0 top-0 h-0.5 w-full" initial={{ x: "-100%" }} whileInView={{ x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} />
        <h3 className="text-lg font-semibold">Disponible dès maintenant 🚀</h3>
        <p className="opacity-70 mt-1">Contacte-moi pour ton idée d’app web, SaaS ou portfolio.</p>
        <div className="mt-4 flex gap-3">
          <a href="#contact" className="btn-primary">Me contacter</a>
          <a href="#projects" className="btn-outline">Voir mes projets</a>
        </div>
      </div>
    </Section>

    {/* METRICS */}
    <KeyStats />

    <div className="my-8 divider-accent" />

    {/* CONTACT */}
    <Contact />
  </>
);}
