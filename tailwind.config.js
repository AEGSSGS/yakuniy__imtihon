/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow:{
        'shadow__box':"-3px 2px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundColor:{
        'grey':"rgba(0, 0, 0, 0.20);",
        'banner':"rgba(0, 0, 0, 0.34)",
        'footer-hr':"rgba(196, 196, 196, 1), rgba(196, 196, 196, 0)",
      },
      backgroundImage:{
        'footer-line':"radial-gradient(189337603.52% 100.01% at 0% 0%, #C4C4C4 0%, rgba(196, 196, 196, 0.00) 100%);"
      }
    },
  },
  plugins: [],
}

