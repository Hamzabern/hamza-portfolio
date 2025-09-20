import { Outlet, NavLink } from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-6">
          <NavLink to="/" className="font-semibold">HB • Portfolio</NavLink>
          <nav className="flex gap-4 text-sm">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      <footer className="border-t text-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 opacity-80">
          © {new Date().getFullYear()} Hamza Bernoussi
        </div>
      </footer>
    </div>
  );
}

