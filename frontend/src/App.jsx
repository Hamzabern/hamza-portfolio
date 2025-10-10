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
      <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
        <Navbar />
      </header>
      <main id="content" tabIndex="-1" className="min-h-dvh">
        <Outlet />
      </main>
      <Footer />
      </div>

      <Suspense fallback={null}>
        {theme === "dark" ? <ShootingStars maxStars={6} minDelayMs={4000} maxDelayMs={9000} initial={1} fadeStrength={0.08} /> : <LightParticles />}
      </Suspense>
    </>
  );
}
