/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["DM mono", "monospace"],
      },
      colors: {
        primary: "#3139fb",
      },
    },
  },
  plugins: [],
};
