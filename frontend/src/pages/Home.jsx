import { Helmet } from "react-helmet-async";


export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home • Hamza Portfolio</title>
        <meta name="description" content="Accueil du portfolio de Hamza." />
      </Helmet>
      <h1 className="text-2xl font-semibold mb-2">Bienvenue</h1>
      <p className="opacity-80">Portfolio propulsé par Laravel (API) + React (Vite + Tailwind).</p>
    </>
  );
}
