const BASE = ''; // grâce au proxy Vite, on appelle directement /api

export async function apiGet(path) {
  const res = await fetch(`${BASE}/api${path}`, { headers: { 'Accept':'application/json' }});
  if (!res.ok) throw new Error(`API ${path} failed`);
  return res.json();
}
