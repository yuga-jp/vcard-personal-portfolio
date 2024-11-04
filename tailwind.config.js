/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./main.js",
    "./assets/icons/*.svg",
    "./modules/**/*.mjs"
  ],
  theme: {
    extend: {
      colors: {
        'neutral-850': '#1f1f1f',
      }
    },
  },
  plugins: [],
}

