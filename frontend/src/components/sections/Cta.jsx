import Section from "../layout/section";
import { motion as Motion } from "framer-motion";

export default function Cta() {
  return (
    <Section id="cta" title="Prêt à discuter ?" subtitle="Je peux t’aider à lancer ou améliorer ton application.">
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
  );
}
