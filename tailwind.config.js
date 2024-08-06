/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "serif-inriaSerif": ["InriaSerif", "Serif"],
        "serif-ogg": ["Ogg", "Serif"],
      },
      colors: {
        "cs-red": "#f64444",
        "cs-blue": "#5ea3ec",
        "cs-yellow": "#ffb400",
        "cs-white": "#fff",
        "cs-black": "#000",
      },
    },
  },
  plugins: [],
};
