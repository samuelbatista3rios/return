/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand: {
          500: '#8257e6'
        }
      },
      backgroundImage:{
        'hero-bg': "url('../src/assets/background.jpg')"
      }
    },
  },
  plugins: [],
}
