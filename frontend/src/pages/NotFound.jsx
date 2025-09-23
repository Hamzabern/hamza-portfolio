import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet><title>404 • Hamza Portfolio</title></Helmet>
      <div className="text-center py-16">
        <h1 className="text-4xl font-extrabold mb-2">404</h1>
        <p className="opacity-80 mb-4">Page introuvable.</p>
        <Link to="/" className="btn-primary">Revenir à l’accueil</Link>
      </div>
    </>
  );
}
