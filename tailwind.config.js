/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#141414",
        "gray-dark": "#1f1f1f",
        gray: "#333333",
        white: "#ffffff",
        lime: "#cce772",
      },
    },
  },
  plugins: [],
};
