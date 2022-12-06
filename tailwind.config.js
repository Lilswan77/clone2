/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0px 100px 0px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        Secular: ['Secular One'],
        Urbanist: ['Urbanist '],
      }
    },
  },
  plugins: [],
}