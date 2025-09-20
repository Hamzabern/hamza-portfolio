import { Helmet } from "react-helmet-async";
export default function NotFound() {
  return (
    <>
      <Helmet><title>404 • Hamza Portfolio</title></Helmet>
      <h1 className="text-2xl font-semibold mb-2">404</h1>
      <p className="opacity-80">Page introuvable.</p>
    </>
  );
}
