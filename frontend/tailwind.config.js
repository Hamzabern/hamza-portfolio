/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Jaune plus lisible en light, un peu plus foncé en dark (via CSS vars)
      },
      boxShadow: {
        // ombres neutres (pas teintées jaune)
        card: "0 10px 30px rgba(0,0,0,.20)",
      },
      backgroundImage: {
        darkgrid:
          "radial-gradient(circle at 25px 25px, rgba(255,255,255,.04) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255,255,255,.04) 2px, transparent 0)",
      },
    },
  },
  plugins: [],
};
