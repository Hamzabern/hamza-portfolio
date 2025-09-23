import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SkipToContent from "./components/SkipToContent";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState(() => window.location.hash || "");

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "");
    window.addEventListener("hashchange", onHash);
    window.addEventListener("popstate", onHash);
    return () => { window.removeEventListener("hashchange", onHash); window.removeEventListener("popstate", onHash); };
  }, []);

  const navItem = (href, label) => (
    <a key={href} href={href} className={["px-3 py-1.5 rounded-md transition hover:bg-[var(--accent)] hover:text-[var(--fg)] dark:hover:bg-[var(--accent)] dark:hover:text-[var(--bg)]",
        hash === href ? "bg-[var(--accent)] text-black" : ""
      ].join(" ")}
      aria-label={label}>
      {label}
    </a>
  );

  return (
    <div className="min-h-dvh flex flex-col">
      <SkipToContent />
      <header className="sticky top-0 z-40 bg-white/60 dark:bg-black/20 backdrop-blur border-b border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          {/* Logo (gauche) */}
          <NavLink to="/" className="font-bold text-lg tracking-wide">HB • Portfolio</NavLink>

          {/* Liens (centre) — masqués en mobile */}
          <nav className="hidden md:flex flex-1 justify-center gap-2 text-sm">
            {navItem("#hero", "Home")}
            {navItem("#services", "Services")}
            {navItem("#projects", "Projects")}
            {navItem("#skills", "Skills")}
            {navItem("#experience", "Experience")}
          </nav>

          {/* À droite : Contact (badge) + ThemeToggle icône-only, avec espace */}
          <div className="ml-auto hidden md:flex items-center gap-3">
            <ThemeToggle iconOnly />
            <a href="#contact" className="contact-badge">
              Contact
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="md:hidden ml-auto icon-btn"
            onClick={() => setOpen(v => !v)}
          >
            {/* Hamburger Tailwind (3 bars) → X quand open */}
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"
                 className="transition-[transform] duration-200">
              <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Drawer mobile (blur + slide) */}
       {open && (
          <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 drawer">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 mnav">
              <a href="#hero" onClick={() => setOpen(false)}>Home</a>
              <a href="#services" onClick={() => setOpen(false)}>Services</a>
              <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
              <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
              <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
              <div className="pt-2 flex items-center gap-2">
                <a href="#contact" onClick={() => setOpen(false)} className="contact-badge">
                  Contact 
                </a>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}

      </header>

      <main id="main" className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-black/10 dark:border-white/10 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="font-semibold mb-2">À propos</div>
            <p className="opacity-80">Développeur Full-Stack (Laravel, React, Tailwind). J’aide à lancer des apps rapides et durables.</p>
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
          <div className="max-w-6xl mx-auto px-4 py-4 opacity-80">© {new Date().getFullYear()} Hamza Bernoussi</div>
        </div>
      </footer>
    </div>
  );
}
