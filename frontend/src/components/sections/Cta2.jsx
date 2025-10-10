import Section from "../layout/section";
import { motion as Motion } from "framer-motion";

export default function Cta2() {
  return (
    <Section id="cta2" title="Un projet en tête ?" subtitle="Voyons ensemble comment le réaliser.">
      <div className="relative rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 overflow-hidden">
        <Motion.div className="absolute left-0 top-0 h-0.5 w-full" initial={{ x: "-100%" }} whileInView={{ x: 0 }} viewport={{ once: true, amount: 0.6 }} 
            transition={{ duration: 1.2, ease: "easeOut" }} style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}/>
        <h3 className="text-lg font-semibold">Disponible dès maintenant 🚀</h3>
        <p className="opacity-70 mt-1">Contacte-moi pour ton idée d’app web, SaaS ou portfolio.</p>
        <div className="mt-4 flex gap-3">
          <a href="#contact" className="btn-primary">Me contacter</a>
          <a href="#projects" className="btn-outline">Voir mes projets</a>
        </div>
      </div>
    </Section>
  );
}
