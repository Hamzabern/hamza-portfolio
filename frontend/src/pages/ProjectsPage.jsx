import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/projects";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  const { data, isLoading } = useQuery({ queryKey: ['projects'], queryFn: getProjects });

  if (isLoading) return <div>Chargement…</div>;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map(p => (
        <Link key={p.slug} to={`/projects/${p.slug}`} className="card overflow-hidden hover:-translate-y-0.5 hover:shadow-lg transition">
          {p.cover_url && <img src={p.cover_url} alt="" className="h-40 w-full object-cover" />}
          <div className="p-4">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm opacity-80 mt-1">{p.summary}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.stack?.map(s => <span key={s} className="text-xs px-2 py-1 rounded-full theme-pill">{s}</span>)}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
