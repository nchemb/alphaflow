/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7c3aed", // violet-600
          dark: "#6d28d9", // violet-700
          light: "#a78bfa" // violet-300
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(124,58,237,0.35)",
      },
    },
  },
  plugins: [],
}
