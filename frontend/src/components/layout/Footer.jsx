export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 text-sm">
      <div className="site-container footer-copy py-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="font-semibold mb-2">À propos</div>
          <p className="opacity-80">
            Développeur Full-Stack (Laravel, React, Tailwind). J’aide à lancer des apps rapides et durables.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Liens</div>
          <ul className="space-y-1">
            <li><a href="#projects" className="hover:text-[var(--accent)]">Projets</a></li>
            <li><a href="#services" className="hover:text-[var(--accent)]">Services</a></li>
            <li><a href="#experience" className="hover:text-[var(--accent)]">Expérience</a></li>
            <li><a href="#contact" className="hover:text-[var(--accent)]">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <ul className="space-y-1">
            <li>Email : <a href="mailto:hamza@example.com" className="hover:text-[var(--accent)]">hamza@example.com</a></li>
            <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">GitHub</a></li>
            <li><a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">LinkedIn</a></li>
            <li>Casablanca, MA</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 dark:border-white/10">
        <div className="site-container py-4 footer-copy">
          © {new Date().getFullYear()} Hamza Bernoussi
        </div>
      </div>
    </footer>
  );
}
