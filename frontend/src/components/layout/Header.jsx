import { Link, NavLink } from "react-router-dom";
import { useSettings } from "../../context/SettingsProvider";

export default function Header() {
  const { settings } = useSettings();
  const name = settings?.site_name || "Portfolio";
  const logo = settings?.logo_url;

  const navLink = ({ isActive }) => "px-3 py-2 rounded-xl " + (isActive ? "bg-black/10" : "hover:bg-black/5");

  return (
    <header className="border-b">
      <div className="container-pro flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 font-semibold">
          {logo ? <img src={logo} alt="" className="h-8" /> : <div className="w-8 h-8 rounded-xl bg-black/80"></div>}
          <span>{name}</span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/" className={navLink} end>Home</NavLink>
          <NavLink to="/projects" className={navLink}>Projects</NavLink>
          <a href="/contact" className="hidden md:inline px-3 py-2 rounded-xl theme-btn">Contact</a>
        </nav>
      </div>
    </header>
  );
}
