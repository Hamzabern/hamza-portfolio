import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import LoadingSkeleton from "../components/LoadingSkeleton";
import Spinner from "../components/Spinner";
import { api } from "../lib/api";
import { useEffect } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";

export default function ProjectPage() {
  const { slug } = useParams();
  const prefersReduced = useReducedMotion();

  const { data, isLoading, error } = useQuery({
    queryKey: ["project", slug],
    queryFn: async () => (await api.get(`/projects/${slug}`)).data,
    retry: 1,
    staleTime: 0,
  });

  useEffect(() => {
    if (data?.theme) {
      Object.entries(data.theme).forEach(([k, v]) => {
        document.documentElement.style.setProperty(`--${k}`, v);
      });
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="space-y-4" aria-busy="true" aria-live="polite">
        <LoadingSkeleton className="h-6 w-1/2" />
        <LoadingSkeleton className="h-64 w-full" />
        <Spinner />
      </div>
    );
  }

  if (error || !data) {
    return <p className="text-red-500">Projet introuvable.</p>;
  }

  return (
    <>
      <Helmet>
        <title>{data.title} • Hamza Bernoussi</title>
        <meta name="description" content={data.summary} />
        {data.cover_url && <meta property="og:image" content={data.cover_url} />}
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.summary} />
      </Helmet>

      <Motion.h1
        initial={prefersReduced ? false : { opacity: 0, y: 6 }}
        animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold mb-4"
        style={{ color: "var(--primary)" }}
      >
        {data.title}
      </Motion.h1>

      <p className="opacity-80">{data.summary}</p>

      {data.cover_url && (
        <Motion.img
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={prefersReduced ? {} : { opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          src={data.cover_url}
          alt={`Couverture du projet ${data.title}`}
          className="mt-4 rounded-lg shadow max-w-full"
          loading="lazy"
          decoding="async"
        />
      )}

      <div className="flex flex-wrap gap-2 mt-4 text-sm">
        {data.stack?.map((s, i) => (
          <span key={i} className="px-2 py-1 bg-white/10 border border-white/10 rounded">
            {s}
          </span>
        ))}
      </div>
    </>
  );
}
