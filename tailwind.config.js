/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        firstColor: "#CC0001",
        secondColor: "#AF0000",
        thirdColor: "#003A6D",
        fourthColor: "#07264e",
        fifthColor: "#061735",
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
