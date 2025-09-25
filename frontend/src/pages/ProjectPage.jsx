import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import LoadingSkeleton from "../components/LoadingSkeleton";
import Spinner from "../components/Spinner";
import { api } from "../lib/api";
import { useEffect, useRef } from "react";
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

  // sauvegarde/restaure proprement sans casser le .dark
useEffect(() => {
  if (!data?.theme) return;
  const prev = new Map();
  Object.entries(data.theme).forEach(([k, v]) => {
    const varName = `--${k}`;
    prev.set(varName, document.documentElement.style.getPropertyValue(varName));
    document.documentElement.style.setProperty(varName, v);
  });
  return () => {
    prev.forEach((val, key) => {
      if (val) document.documentElement.style.setProperty(key, val);
      else document.documentElement.style.removeProperty(key);
    });
  };
}, [data]);


  // Sauvegarde/restaure les variables CSS si le projet définit un "theme"
  const prevVars = useRef(new Map());
  useEffect(() => {
    if (!data?.theme) return;
    Object.entries(data.theme).forEach(([k, v]) => {
      const key = `--${k}`;
      prevVars.current.set(key, document.documentElement.style.getPropertyValue(key));
      document.documentElement.style.setProperty(key, v);
    });
    return () => {
      prevVars.current.forEach((v, k) => document.documentElement.style.setProperty(k, v || ""));
      prevVars.current.clear();
    };
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
  if (error || !data) return <p className="text-red-500">Projet introuvable.</p>;

  return (
    <>
      <Helmet>
        <title>{data.title} • Hamza Bernoussi</title>
        <meta name="description" content={data.summary} />
        {data.cover_url && <meta property="og:image" content={data.cover_url} />}
      </Helmet>

      <nav className="mb-4 text-sm">
        <Link to="/" className="hover:text-[var(--accent)]">Accueil</Link> <span className="opacity-60">/</span>{" "}
        <Link to="/#projects" className="hover:text-[var(--accent)]">Projets</Link> <span className="opacity-60">/</span>{" "}
        <span className="opacity-80">{data.title}</span>
      </nav>

      <Motion.h1
        initial={prefersReduced ? false : { opacity: 0, y: 6 }}
        animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold"
      >
        {data.title}
      </Motion.h1>

      <p className="opacity-80 mt-1">{data.summary}</p>

      {data.cover_url && (
        <Motion.img
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={prefersReduced ? {} : { opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          src={data.cover_url}
          alt={`Couverture du projet ${data.title}`}
          className="mt-4 rounded-xl border border-black/10 dark:border-white/10 shadow-accent"
          loading="lazy" decoding="async"
        />
      )}

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {data.stack?.map((s, i) => (
          <span key={i} className="px-2 py-1 rounded bg-white/10 border border-white/10">
            {s}
          </span>
        ))}
      </div>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-white/5">
          <h3 className="font-semibold mb-1">Objectif</h3>
          <p className="text-sm opacity-80">{data.goal || "Améliorer l’expérience et les performances."}</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-white/5">
          <h3 className="font-semibold mb-1">Résultat</h3>
          <p className="text-sm opacity-80">{data.result || "App livrée, UI propre, mesures SEO et perfs stables."}</p>
        </div>
      </section>

      <div className="mt-6">
        <a href="#contact" className="btn-primary">Me contacter</a>
      </div>
    </>
  );
}
