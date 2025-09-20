import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import LoadingSkeleton from "../components/LoadingSkeleton";
import Spinner from "../components/Spinner";
import { useEffect } from "react";

export default function ProjectPage() {
  const { slug } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project", slug],
    queryFn: () => axios.get(`/api/projects/${slug}`).then(res => res.data),
  });

  // Theming simple via CSS vars
  useEffect(() => {
    if (data?.theme) {
      Object.entries(data.theme).forEach(([k, v]) => {
        document.documentElement.style.setProperty(`--${k}`, v);
      });
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <LoadingSkeleton className="h-6 w-1/2" />
        <LoadingSkeleton className="h-64 w-full" />
        <Spinner />
      </div>
    );
  }

  if (!data) return <p className="text-red-500">Projet introuvable.</p>;

  return (
    <>
      <Helmet>
        <title>{data.title} • Hamza Portfolio</title>
        <meta name="description" content={data.summary} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--primary)" }}>
        {data.title}
      </h1>
      <p className="opacity-80">{data.summary}</p>
      {data.cover_url && (
        <img
          src={data.cover_url}
          alt={data.title}
          className="mt-4 rounded-lg shadow max-w-full"
        />
      )}
      <div className="flex flex-wrap gap-2 mt-4 text-sm">
        {data.stack?.map((s, i) => (
          <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
            {s}
          </span>
        ))}
      </div>
    </>
  );
}
