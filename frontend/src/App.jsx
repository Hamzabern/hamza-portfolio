import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShootingStars from "./components/ShootingStars";
import LightParticles from "./components/LightParticles";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme } = useTheme();
  return (
    <div className="min-h-dvh flex flex-col relative">
      <Navbar />
     {theme === "dark" ? <ShootingStars /> : <LightParticles />}

      <main id="main" className="flex-1 relative">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Outlet className="site-container py-8"/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
