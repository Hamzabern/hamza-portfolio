const BASE = [
  {
    slug: "optitask",
    title: "Optitask",
    summary: "Gestion de projets & tâches (Node/React/Tailwind).",
    stack: ["React","Node.js","Express","MongoDB","Tailwind"],
    cover_url: "https://picsum.photos/seed/optitask/800/420",
    theme: { primary: "#0ea5e9" },
  },
  {
    slug: "portfolio-laravel-react",
    title: "Portfolio Laravel + React",
    summary: "Site perso performant avec API Laravel et front React.",
    stack: ["Laravel","React","Vite","MySQL","Tailwind"],
    cover_url: "https://picsum.photos/seed/portfolio/800/420",
    theme: { primary: "#22d3ee" },
  },
];

const MOCK_PROJECTS = Array.from({ length: 24 }, (_, i) => {
  const b = BASE[i % BASE.length];
  return {
    ...b,
    slug: `${b.slug}-${i + 1}`,
    title: `${b.title} #${i + 1}`,
  };
});

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

export async function fetchProjectsPage({ pageParam = 1, perPage = 8 }) {
  const start = (pageParam - 1) * perPage;
  const end = start + perPage;
  const items = MOCK_PROJECTS.slice(start, end);
  await delay(350); 
  return {
    items,
    nextPage: end < MOCK_PROJECTS.length ? pageParam + 1 : undefined,
  };
}
