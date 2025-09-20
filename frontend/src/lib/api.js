import axios from "axios";

export const api = axios.create({
  timeout: 10000,
});

// Convertit aussi les objets "array-like" {0:{},1:{},...} en vrai tableau
export function ensureArray(x) {
  if (Array.isArray(x)) return x;
  if (x && typeof x === "object") {
    const keys = Object.keys(x);
    if (keys.length && keys.every(k => /^\d+$/.test(k))) {
      // tri par index numérique pour garder l'ordre
      return keys.sort((a, b) => Number(a) - Number(b)).map(k => x[k]);
    }
  }
  return [];
}
