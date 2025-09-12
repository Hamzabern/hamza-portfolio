import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen theme-bg">
      <Header />
      <main className="container-pro py-8">
        <Outlet />
      </main>
      <footer className="mt-16 border-t py-6 opacity-80">
        <div className="container-pro text-sm">© {new Date().getFullYear()} — Hamza Bernoussi</div>
      </footer>
    </div>
  );
}
