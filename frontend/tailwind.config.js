/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: { 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48" },
        royal: { 400: "#a78bfa", 500: "#8b5cf6" },
      },
      boxShadow: {
        glow: "0 0 0 2px rgba(244,63,94,.15), 0 10px 30px rgba(244,63,94,.15)",
        card: "0 10px 30px rgba(0,0,0,.15)",
      },
      backgroundImage: {
        darkgrid:
          "radial-gradient(circle at 25px 25px, rgba(255,255,255,.05) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255,255,255,.05) 2px, transparent 0)",
        lightgrid:
          "radial-gradient(circle at 25px 25px, rgba(0,0,0,.04) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(0,0,0,.04) 2px, transparent 0)",
      },
    },
  },
  plugins: [],
};
