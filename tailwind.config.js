/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities ({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#f8f8ff",
        "color-primary-light": "#332c49",
        "color-primary-dark": "#E1CA98",
        "color-secondary": "#CEA754",
        "color-tertiary": "#4814E4",
        "color-gray": "#808080",
        "color-white": "#FFF8EE",
        "color-blob": "#000000",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px"
      }
    }
  },
  plugins: [rotateY],
}