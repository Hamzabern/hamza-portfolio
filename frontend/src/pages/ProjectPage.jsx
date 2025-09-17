import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProject } from "../services/projects";
import ThemeProvider from "../components/theme/ThemeProvider";
import { Helmet } from "react-helmet-async";

export default function ProjectPage() {
  const { slug } = useParams();
  const { data: p, isLoading } = useQuery({ queryKey:['project', slug], queryFn: () => getProject(slug) });

  if (isLoading) return <div>Chargement…</div>;
  if (!p) return <div>Introuvable</div>;

  return (
    <ThemeProvider theme={p.theme}>
       <Helmet>
        <title>{p.title} — Hamza Bernoussi</title>
          <meta name="description" content={p.summary?.slice(0,150)} />
          <meta property="og:title" content={p.title} />
          <meta property="og:description" content={p.summary?.slice(0,150)} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={p.og_image_url || `/og/${p.slug}.png`} />
          <meta name="twitter:card" content="summary_large_image" />
        {p.cover_url && <meta property="og:image" content={p.cover_url} />}
        <link rel="canonical" href={`${window.location.origin}/projects/${slug}`} />
      </Helmet>

      <article className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">{p.title}</h1>
          <p className="mt-3 opacity-90">{p.summary}</p>
          <div className="mt-4 flex gap-3">
            {p.github_url && <a className="px-4 py-2 rounded-xl border" href={p.github_url} target="_blank">GitHub</a>}
            {p.demo_url && <a className="px-4 py-2 rounded-xl theme-btn" href={p.demo_url} target="_blank">Demo</a>}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.stack?.map(s => <span key={s} className="px-3 py-1 rounded-full text-sm theme-pill">{s}</span>)}
          </div>
        </div>

        <div className="card overflow-hidden">
          {p.cover_url
            ? <img src={p.cover_url} className="w-full h-64 object-cover" />
            : <div className="p-6 opacity-70">Pas d’image</div>}
        </div>

        {p.gallery_urls?.length > 0 && (
          <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.gallery_urls.map((u, i) => (
              <img key={i} src={u} className="w-full h-56 object-cover rounded-2xl border" />
            ))}
          </div>
        )}
      </article>
    </ThemeProvider>
  );
}
