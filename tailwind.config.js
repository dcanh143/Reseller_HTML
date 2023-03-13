module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      flexGrow: {
        5: "5",
      },
      fontFamily: {
        avantGardeRegular: ["'VIEAvantGardeRegular'", "sans-serif"],
        avantGardeBold: ["'VIEAvantGardeBold'", "sans-serif"],
        avantGardeSemibold: ["'VIEAvantGardeDemibold'", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
