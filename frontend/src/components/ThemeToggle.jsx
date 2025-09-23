import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <a
      onClick={toggle}
      className="icon-btn"
      aria-label="Basculer mode sombre/clair"
      title="Dark/Light"
      role="button"
    >
      <span className="emoji">{theme === "dark" ? "☀️" : "🌙"}</span>
    </a>
  );
}
