/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          400: "#f59e0b", // amber-500
          500: "#d97706", // amber-600 (jaune foncé)
          600: "#b45309", // amber-700
        },
      },
      boxShadow: {
        glow: "0 0 0 2px rgba(217,119,6,.12), 0 10px 30px rgba(217,119,6,.18)",
        card: "0 10px 30px rgba(0,0,0,.25)",
      },
      backgroundImage: {
        darkgrid:
          "radial-gradient(circle at 25px 25px, rgba(255,255,255,.04) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255,255,255,.04) 2px, transparent 0)",
      },
    },
  },
  plugins: [],
};
