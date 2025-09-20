import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useEffect, useMemo } from "react";
import { api } from "../lib/api";
import LoadingSkeleton from "../components/LoadingSkeleton";
import Spinner from "../components/Spinner";

function parseMaybeJSON(x) {
  if (typeof x === "string") {
    const s = x.replace(/^\uFEFF+/, "").trim();
    try { return JSON.parse(s); } catch { return null; }
  }
  return x;
}

export default function ProjectPage() {
  const { slug } = useParams();

  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["project", slug],
    queryFn: async () => {
      const res = await api.get(`/api/projects/${slug}`, {
        headers: { Accept: "application/json" },
        transformResponse: [(data) => data], // récupère brut
      });
      return res.data;
    },
    select: (d) => parseMaybeJSON(d) || d,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    staleTime: 0,
    retry: 1,
    structuralSharing: false,
  });

  // Theming simple via CSS vars
  useEffect(() => {
    const theme = data?.theme && typeof data.theme === "object" ? data.theme : null;
    if (theme) {
      Object.entries(theme).forEach(([k, v]) => {
        document.documentElement.style.setProperty(`--${k}`, String(v));
      });
    }
  }, [data]);

  const safeTitle = useMemo(() => {
    const t = data?.title;
    return typeof t === "string" ? t : (t != null ? String(t) : "Project");
  }, [data]);

  const safeDesc = useMemo(() => {
    const s = data?.summary;
    return typeof s === "string" ? s : (s != null ? String(s) : "Détails du projet.");
  }, [data]);

  if (isLoading || isFetching) {
    return (
      <>
        <Helmet><title>Chargement… • Hamza Bernoussi</title></Helmet>
        <div className="space-y-4">
          <LoadingSkeleton className="h-6 w-1/2" />
          <LoadingSkeleton className="h-64 w-full" />
          <Spinner />
        </div>
      </>
    );
  }

  if (error || !data) {
    return (
      <>
        <Helmet><title>Projet introuvable • Hamza Bernoussi</title></Helmet>
        <p className="text-red-500">Projet introuvable.</p>
        <button onClick={() => refetch()} className="mt-2 px-3 py-1.5 text-sm border rounded">
          Réessayer
        </button>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${safeTitle} • Hamza Bernoussi`}</title>
        <meta name="description" content={safeDesc} />
        {data.cover_url && <meta property="og:image" content={String(data.cover_url)} />}
        <meta property="og:title" content={safeTitle} />
        <meta property="og:description" content={safeDesc} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--primary)" }}>
        {safeTitle}
      </h1>
      <p className="opacity-80">{safeDesc}</p>

      {data.cover_url && (
        <img
          src={String(data.cover_url)}
          alt={safeTitle}
          className="mt-4 rounded-lg shadow max-w-full"
        />
      )}

      <div className="flex flex-wrap gap-2 mt-4 text-sm">
        {Array.isArray(data.stack) &&
          data.stack.map((s, i) => (
            <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
              {s}
            </span>
          ))}
      </div>
    </>
  );
}
