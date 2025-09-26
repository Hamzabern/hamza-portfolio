import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import SkipToContent from "./SkipToContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState(() => window.location.hash || "");

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "");
    window.addEventListener("hashchange", onHash);
    window.addEventListener("popstate", onHash);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("popstate", onHash);
    };
  }, []);

  const navItem = (href, label) => (
    <a key={href} href={href} className={[ "px-3 py-1.5 rounded-md transition hover:bg-[var(--accent)] hover:text-[var(--fg)] dark:hover:bg-[var(--accent)] dark:hover:text-[var(--bg)] font-medium",
        hash === href ? "bg-[var(--accent)] text-black" : "" ].join(" ")} aria-label={label} onClick={() => setOpen(false)} >
      {label}
    </a>
  );

  return (
    <>
      <SkipToContent />
      <header className="sticky top-0 z-40 bg-white/60 dark:bg-black/20 backdrop-blur border-b border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          {/* Logo gauche */}
          <NavLink to="/" className="font-bold text-lg tracking-wide">HB • Portfolio</NavLink>

          {/* Liens centre (desktop) */}
          <nav className="hidden md:flex flex-1 justify-center gap-2 text-sm">
            {navItem("#hero", "Home")}
            {navItem("#services", "Services")}
            {navItem("#projects", "Projects")}
            {navItem("#skills", "Skills")}
            {navItem("#experience", "Experience")}
             <a href="#contact" className="contact-badge">
              Contact
            </a>
          </nav>

          {/* Dark/Light Mode (desktop) */}
          <div className="ml-auto hidden md:flex items-center gap-3">
            <ThemeToggle />
          </div>

          {/* Hamburger (mobile) */}
          <button aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} className="md:hidden ml-auto icon-btn" onClick={() => setOpen(v => !v)}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="transition-[transform] duration-200">
              <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Drawer mobile */}
        {open && (
          <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 drawer">
            <div className="pt-2max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 mnav items-center text-center">
              <a href="#hero" onClick={() => setOpen(false)}>Home</a>
              <a href="#services" onClick={() => setOpen(false)}>Services</a>
              <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
              <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
              <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
              <div className="pt-2 flex items-center w-full">
                <a href="#contact" onClick={() => setOpen(false)} className="contact-badge ml-3">
                  Contact
                </a>
                {/* Dark/Light Mode (mobile) */}
                <div className="ml-auto flex items-center gap-2">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
