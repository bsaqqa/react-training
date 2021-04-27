const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily:{
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        ...defaultTheme.colors,
        black:{
          DEFAULT: '#000',
          300: "#333"
        },
        white: {
          DEFAULT: defaultTheme.colors.white,
          100: "#ffffff1A",
          500: "#ffffff80",
          900: "#ffffffE6"
        },
        primary: {
          DEFAULT: "#093047",
          900: "#00546c"
        },
        secondary: "#86C4EC"
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
