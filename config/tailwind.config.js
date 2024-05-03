const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      // custom color palette for branding, see https://tailwindcss.com/docs/customizing-colors
      colors: {
        primary: "#249044",
        "primary-hover": {
          700: "#249044",
          500: "#249044",
        },
      },
      keyframes: {
        flashfade: {
          "0%, 100%": { opacity: "0" },
          "5%, 80%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
