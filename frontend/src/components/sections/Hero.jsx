import LazyImage from "../ui/lazyImage"; 

export default function Hero() {
  return (
    <section className="cv-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="sd-stagger">
            <h1 className="text-3xl sm:text-4xl font-extrabold loading-tight" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              Salut, je suis <span className="text-[var(--accent)]">Hamza</span>
               <br />
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
            <LazyImage src="https://img.freepik.com/premium-vector/programmer-work_1294175-6894.jpg?semt=ais_hybrid&w=740&q=80" alt="Illustration développeur"
              width={1200} height={800} fit="contain" className="w-full max-w-xl mx-auto rounded-xl shadow-card" />
          </div>
        </div>
      </div>
    </section>
  );
}
