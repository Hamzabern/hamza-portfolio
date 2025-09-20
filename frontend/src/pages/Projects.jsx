import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LoadingSkeleton from "../components/LoadingSkeleton";
import Spinner from "../components/Spinner";
import { api } from "../lib/api";

function normalizeToArray(x) {
   if (Array.isArray(x)) return x;

  // Si la réponse arrive en string (JSON brut), on parse proprement
  if (typeof x === "string") {
    // Enlève BOM + espaces
    const s = x.replace(/^\uFEFF+/, "").trim();
    try {
      const j = JSON.parse(s);
      if (Array.isArray(j)) return j;
      if (j && typeof j === "object") return Object.values(j);
      return [];
    } catch {
      return [];
    }
  }

  if (x && typeof x === "object") return Object.values(x);
  return [];
}

export default function Projects() {
  const { data: projects, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await api.get("/api/projects", {
        headers: { Accept: "application/json" },
        transformResponse: [(data) => data], // on récupère brut et on normalise
      });
      return res.data;
    },
    select: (d) => normalizeToArray(d),
    initialData: [],
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    staleTime: 0,
    retry: 1,
    structuralSharing: false,
  });

  if (isLoading || isFetching) {
    return (
      <>
        <Helmet>
          <title>Projects • Hamza Bernoussi</title>
          <meta name="description" content="Découvrez une sélection de projets full-stack." />
        </Helmet>
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
        <button onClick={() => refetch()} className="mt-2 px-3 py-1.5 text-sm border rounded">
          Réessayer
        </button>
      </>
    );
  }

  return (
    <>
      <Helmet><title>Projects • Hamza Bernoussi</title></Helmet>
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>

      {projects.length === 0 ? (
        <p className="opacity-80">Aucun projet publié pour le moment.</p>
      ) : (
        <div className="grid gap-6">
          {projects.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="border rounded-lg p-4 hover:shadow transition">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="opacity-80">{p.summary}</p>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                {Array.isArray(p.stack) &&
                  p.stack.map((s, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                      {s}
                    </span>
                  ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}