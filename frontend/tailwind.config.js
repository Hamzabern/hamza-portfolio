/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.css",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {},
      boxShadow: {
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
