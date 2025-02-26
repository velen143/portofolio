/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        beaurivage: ["Beau Rivage", "cursive"],
        josefin: ["Josefin Sans", "sans-serif"],
        katibeh: ["Katibeh", "sans-serif"],
      },
      backgroundImage: {
        btnBukaUndangan: "url('./images/button.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
