const BASE = import.meta.env.VITE_API_BASE ?? ''; // ex: http://127.0.0.1:8000

export async function apiGet(path) {
  const url = BASE ? `${BASE}/api${path}` : `/api${path}`;
  const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
  if (!res.ok) throw new Error(`API ${path} failed`);
  return res.json();
}
