import Reveal from "../Reveal";

export default function Hero() {
  return (
    <section id="hero" className="pt-4">
      <div className="grid gap-6 md:grid-cols-2 items-center">
        <Reveal as="div" y={8}>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Développeur Full-Stack — Laravel • React • Tailwind
          </h1>
          <p className="opacity-80 mt-3">
            Je conçois des applications rapides, propres et maintenables.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#contact" className="btn-primary btn-attention">Me contacter</a>
            <a href="#projects" className="btn-outline">Voir mes projets</a>
          </div>
        </Reveal>

        <Reveal as="div" y={8} delay={0.08}>
          <img src="https://img.freepik.com/premium-vector/programmer-work_1294175-6894.jpg?semt=ais_hybrid&w=740&q=80" alt="Illustration développeur"
            className="rounded-2xl w-full h-auto object-cover border border-black/10 dark:border-white/10"
            loading="lazy" decoding="async"/>
        </Reveal>
      </div>
    </section>
  );
}
