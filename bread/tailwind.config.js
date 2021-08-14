const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "8xl": [
          "5rem",
          {
            lineHeight: "5.3125rem",
          },
        ],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: {
        DEFAULT: "#5156EA",
      },
      green: {
        DEFAULT: "#57C594",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
