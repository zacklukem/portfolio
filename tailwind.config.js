/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: {
          DEFAULT: "#0d1821",
          100: "#030507",
          200: "#050a0d",
          300: "#080e14",
          400: "#0a131a",
          500: "#0d1821",
          600: "#284863",
          700: "#4279a6",
          800: "#7aa6ca",
          900: "#bdd3e5",
        },
        secondary: {
          DEFAULT: "#8797b2",
          100: "#181d26",
          200: "#313b4c",
          300: "#495872",
          400: "#617598",
          500: "#8797b2",
          600: "#9eabc1",
          700: "#b6c0d0",
          800: "#ced5e0",
          900: "#e7eaef",
        },
        primary: {
          DEFAULT: "#344966",
          100: "#0a0e14",
          200: "#151d28",
          300: "#1f2b3d",
          400: "#2a3a51",
          500: "#344966",
          600: "#4c6a94",
          700: "#728eb6",
          800: "#a1b4ce",
          900: "#d0d9e7",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
