export const PROJECTS = [
  {
    slug: "optitask",
    title: "Optitask",
    summary: "Gestion de projets & tâches (React/Tailwind).",
    stack: ["React","Tailwind","Node"],
    images: [
      "https://picsum.photos/seed/optitask1/960/540",
      "https://picsum.photos/seed/optitask2/960/540",
      "https://picsum.photos/seed/optitask3/960/540",
      "https://picsum.photos/seed/optitask4/960/540"
    ],
    github: "https://github.com/…",
    live: "https://example.com/optitask"
  },
  {
    slug: "portfolio-laravel-react",
    title: "Portfolio Laravel + React",
    summary: "Portfolio full-stack performant.",
    stack: ["Laravel","React","Vite","MySQL","Tailwind"],
    images: [
      "https://picsum.photos/seed/port1/960/540",
      "https://picsum.photos/seed/port2/960/540",
      "https://picsum.photos/seed/port3/960/540"
    ],
    github: "https://github.com/…",
    live: "https://example.com/portfolio"
  },
  ...Array.from({ length: 10 }, (_, i) => ({
    slug: `demo-${i+1}`,
    title: `Demo Project #${i+1}`,
    summary: "Projet de démonstration avec carousel et zoom.",
    stack: ["React","Vite","Tailwind"],
    images: [
      `https://picsum.photos/seed/demo${i+1}a/960/540`,
      `https://picsum.photos/seed/demo${i+1}b/960/540`,
      `https://picsum.photos/seed/demo${i+1}c/960/540`
    ],
    github: "",
    live: ""
  })),
];
