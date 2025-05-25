/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#1D4ED8", // biru solid
        secondary: "#FACC15", // kuning
        accent: "#9333EA", // ungu aksen
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      screens: {
        // Custom breakpoints untuk responsif
        xs: "375px", // iPhone SE & HP kecil
        sm: "640px", // Handphone sedang
        md: "768px", // Tablet & iPad mini
        lg: "1024px", // Laptop kecil / iPad Pro
        xl: "1280px", // Laptop besar / desktop
        "2xl": "1536px", // Monitor besar
        "3xl": "1920px", // Full HD (monitor gede)
        "4xl": "2560px", // 2K monitor
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // plugin form minimalis
  ],
};
