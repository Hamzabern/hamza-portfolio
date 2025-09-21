import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      className="ml-auto px-2 py-1.5 rounded-md text-sm border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition"
      aria-label="Basculer mode sombre/clair"
      title="Basculer Dark/Light"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
