import Section from "../layout/section";
import { motion as Motion } from "framer-motion";

export default function Cta2() {
  return (
    <Section id="cta2" title="Got a project in mind ?" subtitle="Let’s see how we can make it happen together.">
      <div className="relative rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 overflow-hidden">
        <Motion.div className="absolute left-0 top-0 h-0.5 w-full" initial={{ x: "-100%" }} whileInView={{ x: 0 }} viewport={{ once: true, amount: 0.6 }} 
            transition={{ duration: 1.2, ease: "easeOut" }} style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}/>
        <h3 className="text-lg font-semibold">Available now 🚀</h3>
        <p className="opacity-70 mt-1">Contact me for your web app, SaaS, or portfolio idea.</p>
        <div className="mt-4 flex gap-3">
          <a href="#contact" className="btn-primary">Contact me</a>
          <a href="#projects" className="btn-outline">View my projects</a>
        </div>
      </div>
    </Section>
  );
}
