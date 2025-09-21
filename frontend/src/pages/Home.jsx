import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Hamza Bernoussi • Full-Stack Developer</title>
        <meta name="description"
          content="Bienvenue sur le portfolio de Hamza Bernoussi, développeur full-stack spécialisé en Laravel, React et Tailwind."
        />
      </Helmet>
      <h1 className="text-2xl font-semibold mb-2">Bienvenue</h1>
      <p className="opacity-80">Portfolio propulsé par Laravel (API) + React (Vite + Tailwind).</p>
    </>
  );
}
