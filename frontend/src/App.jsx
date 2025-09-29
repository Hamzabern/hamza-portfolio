import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer";
import SkipToContent from "./components/layout/SkipToContent.jsx";
import ViewMount from "./components/ui/ViewMount.jsx";

const ShootingStars = lazy(() => import("./components/effects/ShootingStars.jsx"));
const LightParticles = lazy(() => import("./components/effects/LightParticles.jsx"));

export default function App() {
  return (
    <>
      <SkipToContent />
      <Navbar />
      <main id="content" className="min-h-dvh">
        <Outlet />
      </main>
      <Footer />

      {/* Effets visuels chargés seulement quand on scrolle vers le bas */}
      <Suspense fallback={null}>
        <ViewMount>
          <ShootingStars />
        </ViewMount>
        <ViewMount>
          <LightParticles />
        </ViewMount>
      </Suspense>
    </>
  );
}
