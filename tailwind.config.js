/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#E8EDE9',
          200: '#c9d6cb',
          300: '#a3b8a7',
          400: '#7C9A82',
          500: '#5f7f66',
          600: '#4a6550',
          700: '#3d5242',
          800: '#334337',
          900: '#2b382e',
        },
        cream: {
          50: '#FDFCFA',
          100: '#FAF7F2',
          200: '#F3EDE3',
          300: '#E8DFD0',
        },
        gold: {
          300: '#D4BC8A',
          400: '#C4A265',
          500: '#B08D4A',
        },
        charcoal: '#2D3436',
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
