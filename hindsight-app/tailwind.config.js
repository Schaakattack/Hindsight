/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1120px',
    },
    colors: {
      background: '#1C1B1F',
      'button-color': '#D9D9D9',
      'button-label': '#1C1B1F',
      brand: {
        950: '#331f15',
        900: '#593c2a',
        800: '#67462c',
        700: '#7b542d',
        600: '#a07538',
        500: '#b28c40',
        400: '#c1a04e',
        300: '#d0b974',
        200: '#e1d5a7',
        100: '#efead2',
        50: '#f9f7ed'
      }
    },
    fontFamily: {
      'brand-black': ['Poppins-Black'],
      'brand-black-italic': ['Poppins-Black'],
      'brand-bold': ['Poppins-Bold'],
      'brand-bold-italic': ['Poppins-BoldItalic'],
      'brand-medium': ['Poppins-Medium'],
      'brand-medium-italic': ['Poppins-MediumItalic'],
      'brand-regular': ['Poppins-Regular']
    },
    extend: {
      
    },
  },
  plugins: [],
}

