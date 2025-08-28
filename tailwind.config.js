/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#27C34A", // green accents in your mock
          dark: "#0B0B0B",
          light: "#F7F7F7",
        },
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
