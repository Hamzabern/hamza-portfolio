import Section from "../layout/section";
import Reveal from "../ui/Reveal";
import { useCallback, useRef, useState } from "react";

const PROJECT_TYPES = ["Showcase website", "Web application", "Portfolio", "SaaS", "Redesign", "Other"];
const BUDGETS = ["< $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+"];
const TIMELINES = ["Not urgent", "1–2 months", "2–4 weeks", "Urgent"];

export default function Contact() {
  const [errors, setErrors] = useState({});
  const textareaRef = useRef(null);

  const autoResize = (el) => {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (k) => (form.get(k) || "").toString().trim();

    const name = get("name");
    const email = get("email");
    const company = get("company");
    const budget = get("budget");
    const timeline = get("timeline");
    const message = get("message");
    const types = form.getAll("types"); 
    const consent = form.get("consent") === "on";
    const file = form.get("file");

    const nextErrors = {};
    if (!name) nextErrors.name = "Your name is required.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Invalid email.";
    if (!message) nextErrors.message = "Please describe your needs.";
    if (!consent) nextErrors.consent = "You must accept to be contacted.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const subjectBits = [
      "Portfolio Contact",
      types.length ? `• ${types.join(", ")}` : "",
      budget ? `• Budget: ${budget}` : "",
      timeline ? `• Timeline: ${timeline}` : "",
    ].filter(Boolean);
    const subject = encodeURIComponent(subjectBits.join(" "));

    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      types.length ? `Project type(s): ${types.join(", ")}` : "",
      budget ? `Estimated budget: ${budget}` : "",
      timeline ? `Timeline/urgency: ${timeline}` : "",
      "",
      message,
      "",
      file && file.name ? `(Attachment to add manually: ${file.name})` : "",
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));

    if (file && file.name) {
      alert("Tip: The attachment cannot be included via mailto. After the email opens, please attach the file manually before sending.");
    }

    window.location.href = `mailto:bernoussihamzaa@gmail.com?subject=${subject}&body=${body}`;
  }, []);

  return (
    <Section id="contact" title="Contact" subtitle="Let’s discuss your project. Response in under 24h.">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal y={8}>
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5">
            <p className="opacity-80 text-sm">
             You can write to me via the form or directly by email. I usually reply within 24 hours.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <a href="https://github.com/Hamzabern" target="_blank" rel="noreferrer" className="icon-btn hover:text-[var(--accent)]" aria-label="GitHub" title="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.76.08-.75.08-.75 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.77-1.61-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.61-5.49 5.91.43.37.82 1.09.82 2.21v3.27c0 .32.22.68.83.57A12 12 0 0 0 12 .5Z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/hamza-bernoussi-3b4550163/" target="_blank" rel="noreferrer" className="icon-btn hover:text-[var(--accent)]" aria-label="LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3.5 9h3V21h-3V9Zm7 0h2.9v1.65h.04c.4-.75 1.37-1.54 2.83-1.54 3.03 0 3.6 2 3.6 4.6V21h-3v-5.3c0-1.26-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21h-3V9Z"/>
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal y={8} delay={0.05}>
          <form onSubmit={onSubmit} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5">
            <div className="form-grid">
              {/* Name */}
              <div className="form-field">
                <label className="form-label" htmlFor="name">Full name<span className="req">*</span></label>
                <input id="name" name="name" type="text" autoComplete="name" placeholder="Ex. John Doe" className="form-input" aria-invalid={!!errors.name}/>
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="email">Email<span className="req">*</span></label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="name@example.com" required className="form-input" aria-invalid={!!errors.email}/>
                <p className="form-help">Réponse sous 24h.</p>
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="company">Company / Organization</label>
                <input id="company" name="company" type="text" placeholder="Ex. ACME Inc." className="form-input" />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="budget">Estimated budget</label>
                <select id="budget" name="budget" className="form-select" defaultValue="">
                  <option value="" disabled>Choose…</option>
                  {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="timeline">Timeline / Urgency</label>
                <select id="timeline" name="timeline" className="form-select" defaultValue="">
                  <option value="" disabled>Choose…</option>
                  {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="form-field md:col-span-2">
                <span className="form-label">Project type</span>
                <div className="chip-grid">
                  {PROJECT_TYPES.map((t) => (
                    <label key={t} className="chip-check">
                      <input type="checkbox" name="types" value={t} />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-field md:col-span-2">
                <label className="form-label" htmlFor="message">Project details<span className="req">*</span></label>
                <textarea id="message" name="message" placeholder="Goals, features, pages, inspirations, etc."
                  className="form-textarea" ref={textareaRef} onInput={(e) => autoResize(e.currentTarget)} aria-invalid={!!errors.message}/>
                {errors.message && <p className="form-error">{errors.message}</p>}
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="file">Attachment (optional)</label>
                <input id="file" name="file" type="file" className="form-input" />
                <p className="form-help">Add the file manually to your email after opening.</p>
              </div>

              <div className="form-field md:col-span-2">
                <label className="consent">
                  <input type="checkbox" name="consent" />
                  <span>I agree that my information may be used to contact me back.<span className="req">*</span></span>
                </label>
                {errors.consent && <p className="form-error">{errors.consent}</p>}
              </div>

              <div className="md:col-span-2 flex justify-end pt-2">
                <button type="submit" className="btn-primary">
                  Send request
                </button>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
