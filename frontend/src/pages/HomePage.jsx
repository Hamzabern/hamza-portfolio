import { useSettings } from "../context/SettingsProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  const { settings } = useSettings();
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <Helmet>
        <title>{settings?.site_name || "Portfolio"}</title>
        {settings?.seo?.meta_desc && <meta name="description" content={settings.seo.meta_desc} />}
      </Helmet>
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1]">Full-Stack Developer</h1>
        <p className="mt-4 text-lg opacity-90">
          {settings?.tagline || "I build clean backends & modern UIs."}
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/projects" className="theme-btn px-5 py-3 rounded-2xl">Voir mes projets</Link>
          {settings?.cta?.type === 'whatsapp' && settings?.cta?.value &&
            <a href={`https://wa.me/${settings.cta.value}`} target="_blank" className="px-5 py-3 rounded-2xl border">
              WhatsApp
            </a>}
        </div>
      </div>
      <div className="card p-6">
        <div className="opacity-70">Ici on mettra une image/illustration ou un aperçu dynamique.</div>
      </div>
    </section>
  );
}
