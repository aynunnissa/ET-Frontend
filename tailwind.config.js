/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#02483D",
          800: "#045841",
          700: "#086C48",
          600: "#0A8049",
          500: "#0E9749",
          400: "#3EC068",
          300: "#66DF82",
          200: "#9CF3AA",
          100: "#CCFACD",
          main: "#0E9749"
        },
        secondary: {
          900: "#7B5701",
          800: "#936D00",
          700: "#B68B00",
          600: "#DAAA00",
          500: "#FFCD00",
          400: "#FFDC40",
          300: "#FFE668",
          200: "#FFF099",
          100: "#FFF9CC",
          main: "#FFCD00"
        },
        neutral: {
          900: "#080405",
          800: "#0A0607",
          700: "#0B0A08",
          600: "#0F0D0E",
          500: "#121212",
          400: "#707070",
          300: "#B7B7B7",
          200: "#E7E7E7",
          100: "#F3F3F3",
          main: "#121212"
        },
        'et-blue': {
          900: "#032070",
          800: "#042D87",
          700: "#0A3FA8",
          600: "#0C54C6",
          500: "#116FE7",
          400: "#4A9AF1",
          300: "#6FB6F8",
          200: "#9ED5FD",
          100: "#D1EAFF",
          main: "#116FE7"
        },
        'et-red': {
          900: "#690738",
          800: "#7F0B3A",
          700: "#9E1240",
          600: "#BC1A3E",
          500: "#D9253D",
          400: "#E9565C",
          300: "#F3827A",
          200: "#FCB4A7",
          100: "#FEDCD2",
          main: "#D9253D"
        },
      }
    },
  },
  plugins: [],
}

