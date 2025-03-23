/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Untuk proyek React/Vite
    "./components/**/*.{js,ts,jsx,tsx}", // Jika ada folder komponen terpisah
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
