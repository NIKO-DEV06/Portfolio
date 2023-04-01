/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // xl: { min: "1280px" },
      // lg: { min: "1024px" },
      // md: { min: "768px" },
      // sm: { min: "640px" },

      sm: "768px",
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
        // Primary
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        // Neutral
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        blackk: "hsl(0, 0%, 0%)", //(with 75% opacity for lightbox background)
      },
      backgroundImage: {
        "black-gradient": "linear-gradient(to right, #161616 40%, black 190%)",
        "white-gradient":
          "linear-gradient(to bottom, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)",
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
