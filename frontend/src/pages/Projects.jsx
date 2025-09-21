import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LoadingSkeleton from "../components/LoadingSkeleton";
import Spinner from "../components/Spinner";
import { api, ensureArray } from "../lib/api";
import Card from "../components/Card";

export default function Projects() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await api.get("/api/projects");
      return res.data;
    },
    retry: 1,
    staleTime: 0,
  });

  if (isLoading) {
    return (
      <>
        <Helmet><title>Projects • Hamza Bernoussi</title></Helmet>
        <h1 className="text-2xl font-semibold mb-4">Projects</h1>
        <div className="space-y-4">
          <LoadingSkeleton className="h-6 w-1/3" />
          <LoadingSkeleton className="h-32 w-full" />
          <LoadingSkeleton className="h-32 w-full" />
          <Spinner />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Helmet><title>Projects • Hamza Bernoussi</title></Helmet>
        <h1 className="text-2xl font-semibold mb-4">Projects</h1>
        <p className="text-red-500">Impossible de charger les projets.</p>
      </>
    );
  }

  const projects = ensureArray(data);

  return (
    <>
      <Helmet><title>Projects • Hamza Bernoussi</title></Helmet>
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group block rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm overflow-hidden shadow-accent hover:shadow-accent transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            aria-label={`Voir le projet ${p.title}`}
          >
            {p.cover_url && (
              <img
                src={p.cover_url}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="w-full h-44 object-cover transition group-hover:opacity-95 shadow-accent"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="opacity-80 text-sm">{p.summary}</p>
              <div className="flex flex-wrap gap-2 mt-2 text-xs">
                {p.stack?.map((s, idx) => (
                  <span key={idx} className="px-2 py-1 rounded bg-white/10 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
              <span
                className="inline-block mt-3 text-sm underline underline-offset-4 group-hover:no-underline"
                style={{ color: "var(--accent)" }}
              >
                Voir le projet →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
