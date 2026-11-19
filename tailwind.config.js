/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        luxury: {
          dark: '#111111',
          black: '#080808',
          gold: '#C5A880',
          lightGold: '#E6D5B8',
          cream: '#FAF8F5',
          sand: '#F4EFEB',
          muted: '#767676',
          border: '#E8E8E8',
          card: '#FBFBFB'
        }
      },
      letterSpacing: {
        widest: '0.22em',
        ultra: '0.35em',
      }
    },
  },
  plugins: [],
}

