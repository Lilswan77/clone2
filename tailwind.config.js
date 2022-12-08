/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0px 10px 1px',
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