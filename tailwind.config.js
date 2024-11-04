/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./main.js",
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

