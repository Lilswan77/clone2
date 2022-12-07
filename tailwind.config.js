/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0px 25px 0px',
      },
      fontFamily: {
        Secular: ['Secular One'],
        Urbanist: ['Urbanist'],
        Poppins: ['Poppins'],
      }
    },
  },
  plugins: [],
}