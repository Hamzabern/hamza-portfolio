import { Outlet, NavLink } from "react-router-dom";
import SkipToContent from "./components/SkipToContent";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <SkipToContent />

      {/* Header avec lien actif = fond + texte (pas de border) */}
      <header className="bg-black/20 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-6">
          <NavLink to="/" className="font-semibold tracking-wide" aria-label="Accueil">
            HB • Portfolio
          </NavLink>

          <nav className="flex flex-wrap gap-1 text-sm">
            {[
              { to: "/", label: "Home", end: true },
              { to: "/projects", label: "Projects" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md transition ${
                    isActive
                      ? "bg-[var(--accent)] text-white"
                      : "hover:bg-white/10 hover:text-[var(--accent)]"
                  }`
                }
                aria-label={label}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-white/10 text-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 opacity-80">
          © {new Date().getFullYear()} Hamza Bernoussi
        </div>
      </footer>
    </div>
  );
}
