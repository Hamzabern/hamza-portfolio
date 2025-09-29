import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer";
import SkipToContent from "./components/layout/SkipToContent.jsx";
import { useTheme } from "./theme/useTheme.js";

const ShootingStars = lazy(() => import("./components/effects/ShootingStars.jsx"));
const LightParticles = lazy(() => import("./components/effects/LightParticles.jsx"));

export default function App() {
  const { theme } = useTheme();
  return (
    <>
      <SkipToContent />
      <Navbar />
      <main id="content" tabIndex="-1" className="min-h-dvh">
        <Outlet />
      </main>
      <Footer />

      <Suspense fallback={null}>
        {theme === "dark" ? <ShootingStars /> : <LightParticles />}
      </Suspense>
    </>
  );
}
