import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LoadingSkeleton from "../components/LoadingSkeleton";
import Spinner from "../components/Spinner";
import { api } from "../lib/api";

export default function Projects() {
  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await api.get("/api/projects");
      return res.data;
    },
    select: (d) => (Array.isArray(d) ? d : []), // ← garantit un tableau
    retry: 1,
    staleTime: 0,
  });

  if (isLoading) {
    return (
      <>
        <Helmet><title>Projects • Hamza Portfolio</title></Helmet>
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
        <Helmet><title>Projects • Hamza Portfolio</title></Helmet>
        <h1 className="text-2xl font-semibold mb-4">Projects</h1>
        <p className="text-red-500">Impossible de charger les projets.</p>
      </>
    );
  }

  return (
    <>
      <Helmet><title>Projects • Hamza Portfolio</title></Helmet>
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>

      {projects.length === 0 ? (
        <p className="opacity-80">Aucun projet publié pour le moment.</p>
      ) : (
        <div className="grid gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="border rounded-lg p-4 hover:shadow transition"
            >
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="opacity-80">{p.summary}</p>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                {p.stack?.map((s, i) => (
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
