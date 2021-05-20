module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        primary: "#0C325B",
        secondary: "#08E193",
        white: "#ffffff",
        positive: "#0CBD73",
        negative: "#FF0000",
        orange: "#FF6B00",
        blue: "#0075FF",
        green: "#20E100",
        blueSea: "#01CBB8"
      },
      fontFamily: {
        roboto: "Roboto Condensed",
        "pt-sans": "PT Sans"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
