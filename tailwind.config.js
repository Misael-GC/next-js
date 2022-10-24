/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*{html,js}"],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
    },
  },
  plugins: [],
};
