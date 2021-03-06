module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        beige: {
          light: '#C2A487',
          dark: '#937055',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
