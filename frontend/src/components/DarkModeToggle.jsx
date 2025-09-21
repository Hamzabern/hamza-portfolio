import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark(v => !v)}
      className="text-sm px-3 py-1.5 rounded-lg border border-white/15 hover:bg-white/10 dark:hover:bg-white/10"
      aria-pressed={isDark}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
