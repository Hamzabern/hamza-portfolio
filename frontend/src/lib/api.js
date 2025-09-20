import axios from "axios";

export const api = axios.create({
  // baseURL vide: on utilise les chemins relatifs + proxy Vite pour /api
  timeout: 10000,
});

// Helper: garantit un tableau (évite data.map is not a function)
export function ensureArray(x) {
  if (Array.isArray(x)) return x;
  return [];
}
