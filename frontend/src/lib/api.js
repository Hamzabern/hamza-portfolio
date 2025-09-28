import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: { Accept: "application/json" },
  transformResponse: [(data) => {
    if (typeof data === "string") {
      const cleaned = data.replace(/^\uFEFF+/, "").trim();
      try { return JSON.parse(cleaned); } catch { return cleaned; }
    }
    return data;
  }],
});

export function ensureArray(x) {
  return Array.isArray(x) ? x : [];
}
