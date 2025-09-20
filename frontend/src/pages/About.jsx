import { Helmet } from "react-helmet-async";
export default function About() {
  return (
    <>
      <Helmet><title>About • Hamza Portfolio</title></Helmet>
      <h1 className="text-2xl font-semibold mb-2">About</h1>
      <p className="opacity-80">Quelques infos sur Hamza.</p>
    </>
  );
}
