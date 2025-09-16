import { useState } from "react";

export default function ContactPage() {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const res = await fetch('/api/contact', { method: 'POST', body: form });
    setOk(res.ok);
    setLoading(false);
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>

      {ok && <div className="mb-4 p-3 rounded-xl border bg-green-50">Merci, je te réponds vite.</div>}

      <form onSubmit={onSubmit} className="grid gap-4">
        <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <input name="name" className="border rounded-xl px-3 py-2" placeholder="Votre nom" required />
        <input name="email" type="email" className="border rounded-xl px-3 py-2" placeholder="Votre email" required />
        <input name="subject" className="border rounded-xl px-3 py-2" placeholder="Sujet (optionnel)" />
        <textarea name="message" rows="6" className="border rounded-xl px-3 py-2" placeholder="Votre message" required></textarea>
        <button disabled={loading} className="theme-btn px-5 py-3 rounded-2xl">{loading ? 'Envoi…' : 'Envoyer'}</button>
      </form>
    </section>
  );
}
