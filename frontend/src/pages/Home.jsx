import { Suspense, lazy } from "react";
import Section from "../components/layout/section";
import { motion as Motion } from "framer-motion";

const Hero = lazy(() => import("../components/sections/Hero"));
const HeroSkel = lazy(() => import("../components/sections/skeleton/Hero.skeleton"));
const Services = lazy(() => import("../components/sections/Services"));
const ServicesSkel = lazy(() => import("../components/sections/skeleton/Services.skeleton"));
const Tech = lazy(() => import("../components/sections/Tech"));
const TechSkel  = lazy(() => import("../components/sections/skeleton/Tech.skeleton.jsx"));
const Cta = lazy(() => import("../components/sections/Cta.jsx"));
const CtaSkeleton = lazy(() => import("../components/sections/skeleton/Cta.skeleton.jsx"));
const Projects   = lazy(() => import("../components/sections/Projects"));
const ProjectsSkel = lazy(() => import("../components/sections/skeleton/Projects.skeleton.jsx"));
const Skills = lazy(() => import("../components/sections/Skills"));
const SkillsSkeleton = lazy(() => import("../components/sections/skeleton/Skills.skeleton.jsx"));
const Experience = lazy(() => import("../components/sections/Experience"));
const KeyStats = lazy(() => import("../components/sections/KeyStats"));
const Contact = lazy(() => import("../components/sections/Contact"));

export default function Home() {
return (
  <>
    <div className="space-y-16">
      {/* HERO Section */}
      <Suspense fallback={<HeroSkel />}>
        <Hero />
      </Suspense>
        <div className="my-8 divider-accent" />

      {/* SERVICES Section */}
      <Suspense fallback={<ServicesSkel />}>
        <Services />
      </Suspense>

      {/* TECHNOLOGIES */}
      <Suspense fallback={<TechSkel />}>
        <Tech />
      </Suspense>

      {/* PROJECTS Section */}
      <Suspense fallback={<ProjectsSkel />}>
        <Projects />
      </Suspense>

      {/* CTA */}
      <Suspense fallback={<CtaSkeleton />}>
        <Cta />
      </Suspense>

      {/* SKILLS */}
      <Suspense fallback={<SkillsSkeleton />}>
        <Skills />
      </Suspense>

      {/* EXPERIENCE */}
      <Suspense fallback={<Section title="Experience" />}>
        <Experience />
      </Suspense>
      
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
      <Suspense fallback={<Section title="Key Stats" />}>
        <KeyStats />
      </Suspense>

      <div className="my-8 divider-accent" />

      {/* CONTACT */}
      <Suspense fallback={<Section title="Contact" />}>
        <Contact />
      </Suspense>
    </div>
  </>
);}
