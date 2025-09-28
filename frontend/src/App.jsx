import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ShootingStars from "./components/effects/ShootingStars";
import LightParticles from "./components/effects/LightParticles";
import { useTheme } from "./theme/useTheme";

export default function App() {
  const { theme } = useTheme();
  return (
    <div className="min-h-dvh flex flex-col relative">
      <Navbar />
     {theme === "dark" ? <ShootingStars key="dark" intervalMs={8000} /> : <LightParticles key="light" count={30} />}

      <main id="main" className="flex-1 relative">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Outlet className="site-container py-8"/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
