import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SkipToContent from "./components/SkipToContent";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
    const [hash, setHash] = useState(() => window.location.hash || "");
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "");
    window.addEventListener("hashchange", onHash);
    window.addEventListener("popstate", onHash);
    return () => { window.removeEventListener("hashchange", onHash); window.removeEventListener("popstate", onHash); };
  }, []);

   const navItem = (href, label) => (
    <a
      key={href}
      href={href}
      className="px-3 py-1.5 rounded-md transition hover:bg-[var(--accent)] dark:hover:bg-[var(--accent)] hover:text-black data-[active=true]:bg-[var(--accent)] data-[active=true]:text-black hover: focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
      data-active={hash === href}
      aria-label={label}
    >
      {label}
    </a>
  );

  return (
    <div className="min-h-dvh flex flex-col">
      <SkipToContent />
      <header className="sticky top-0 z-40 bg-white/60 dark:bg-black/20 backdrop-blur border-b border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
          {/* Logo à gauche */}
          <NavLink to="/" className="font-bold text-lg tracking-wide mr-auto">
            HB • Portfolio
          </NavLink>
          {/* Liens centrés */}
          <nav className="flex flex-wrap gap-2 justify-center flex-1 text-sm">
            {navItem("#hero", "Home")}
            {navItem("#services", "Services")}
            {navItem("#projects", "Projects")}
            {navItem("#skills", "Skills")}
            {navItem("#experience", "Experience")}
            {navItem("#contact", "Contact")}
          </nav>
          {/* Toggle à droite */}
          <ThemeToggle />
        </div>
      </header>
      <main id="main" className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
      <footer className="border-t border-black/10 dark:border-white/10 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 opacity-80">
          © {new Date().getFullYear()} Hamza Bernoussi
        </div>
      </footer>
    </div>
  );
}
