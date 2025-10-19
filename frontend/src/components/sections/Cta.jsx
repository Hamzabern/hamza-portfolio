import Section from "../layout/section";

export default function Cta() {
  return (
    <Section id="cta" title="Ready to talk ?" subtitle="I can help you launch or improve your application.">
      <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-white/5 flex flex-wrap items-center gap-3 justify-between hover:shadow-accent transition">
        <div className="text-sm opacity-80">
          Freelance/contract availability — quick response.
        </div>
        <div className="flex gap-2">
          <a href="#contact" className="btn-primary btn-attention">
            Contact me
          </a>
          <a href="#projects" className="btn-outline">
           See examples
          </a>
        </div>
      </div>
    </Section>
  );
}
