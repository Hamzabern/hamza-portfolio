import LazyImage from "../ui/LazyImage";
import heroPng from "../../assets/hero/hero-Illustration.png";
import heroWebp from "../../assets/hero/hero-Illustration.webp";

export default function Hero() {
  return (
    <section className="cv-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="sd-stagger">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Salut, je suis <span className="text-[var(--accent)]">Hamza</span><br />
              Développeur Full-Stack.
            </h1>
            <p className="mt-3 opacity-80">
              J’aime construire des apps modernes, rapides et bien pensées.
              Laravel • React • Tailwind • Sécurité • Qualité.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">Voir mes projets</a>
              <a href="#contact" className="btn-outline">Me contacter</a>
            </div>
          </div>

          <div className="sd-fade-up">
            <picture className="block">
              <source srcSet={heroWebp} type="image/webp" />
              <LazyImage src={heroPng} alt="Hero Illustration" width={1200} height={800} loading="eager" fetchPriority="high"
                aspect="3/2" fit="" className="w-full max-w-2xl mx-auto rounded-xl "/>
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
