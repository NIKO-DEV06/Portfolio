/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      // xl: { min: "1280px" },
      // lg: { min: "1024px" },
      // md: { min: "768px" },
      // sm: { min: "640px" },

      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",

      // ...Object.fromEntries(
      //   Object.entries({
      //     xl: "1440px",
      //     lg: "976px",
      //     md: "768px",
      //     sm: "375px",
      //   }).reverse()
      // ),
    },
    extend: {
      padding: {
        safe: "env(safe-area-inset-top)",
      },
      colors: {
        veryDarkBlue: "hsl(220, 13%, 13%)",
      },
      backgroundImage: {
        "black-gradient": "linear-gradient(to right, #161616 40%, black 190%)",
        "image-gradient":
          "linear-gradient(to top, #000000, rgba(255, 255, 255, 0.5))",
        "white-gradient": "linear-gradient(to right, #fdfbfb 0%, #ebedee 100%)",
      },

      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      letterSpacing: {
        widest: ".3em",
      },
      dropShadow: {
        glow: "0 0 1em hsl(26, 100%, 55%)",
      },
    },
  },
  plugins: [],
};
