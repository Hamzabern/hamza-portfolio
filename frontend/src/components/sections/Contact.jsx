import Section from "../layout/section";
import Reveal from "../ui/Reveal";
import { useCallback } from "react";

export default function Contact() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = encodeURIComponent(form.get("name") || "");
    const email = encodeURIComponent(form.get("email") || "");
    const message = encodeURIComponent(form.get("message") || "");
    const body = `Nom: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.location.href = `mailto:hamza@example.com?subject=Contact%20Portfolio&body=${body}`;
  }, []);

  return (
    <Section id="contact" title="Contact" subtitle="Discutons de ton projet. Réponse < 24h.">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal y={8}>
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5 shadow-accent">
            <p className="opacity-80 text-sm">
              Tu peux m’écrire via le formulaire ou directement par email. Je réponds généralement dans les 24h.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a href="https://github.com/Hamzabern" target="_blank" rel="noreferrer" className="icon-btn hover:text-[var(--accent)]" aria-label="GitHub" title="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.76.08-.75.08-.75 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.77-1.61-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.61-5.49 5.91.43.37.82 1.09.82 2.21v3.27c0 .32.22.68.83.57A12 12 0 0 0 12 .5Z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="icon-btn hover:text-[var(--accent)]" aria-label="LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3.5 9h3V21h-3V9Zm7 0h2.9v1.65h.04c.4-.75 1.37-1.54 2.83-1.54 3.03 0 3.6 2 3.6 4.6V21h-3v-5.3c0-1.26-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21h-3V9Z"/>
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal y={8} delay={0.05}>
          <form onSubmit={onSubmit} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5 shadow-accent">
            <div className="grid gap-3">
              <label className="text-sm">
                Nom
                <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  type="text" name="name" autoComplete="name" placeholder="Ton nom" />
              </label>
              <label className="text-sm">
                Email (réponse sous 24h)
                <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  type="email" name="email" required autoComplete="email" placeholder="nom@domaine.com" />
              </label>
              <label className="text-sm">
                Message
                <textarea className="mt-1 w-full rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/10 px-3 py-2 h-28 resize-y outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  name="message" placeholder="Décris brièvement ton besoin…" />
              </label>
              <div className="pt-2">
                <button type="submit" className="btn-primary">Envoyer</button>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
