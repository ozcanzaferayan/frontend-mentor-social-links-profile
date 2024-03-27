/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      fontSize: {
        base: "14px",
      },
      colors: {
        black: "#141414",
        "dark-grey": "#1F1F1F",
        grey: "#333333",
        white: "#FFFFFF",
        "neon-green": "#C4F82A",
      },
    },
  },
  plugins: [],
};
