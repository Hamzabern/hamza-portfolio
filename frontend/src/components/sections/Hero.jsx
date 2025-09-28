import Reveal from "../ui/Reveal";

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
          <img src="https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?t=st=1758903353~exp=1758906953~hmac=e1cdd89babbc7642423e6c5a63d4b06c277aeb0d8ecddae5058056d3838e3200&w=1480" alt="Illustration développeur"
            className="rounded-2xl w-full h-auto object-cover border border-black/10 dark:border-white/10"
            loading="lazy" decoding="async"/>
        </Reveal>
      </div>
    </section>
  );
}
