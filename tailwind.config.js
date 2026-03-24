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
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        'hero-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'hero-fade-in': 'hero-fade-in 0.8s ease-out forwards',
        'hero-fade-in-1': 'hero-fade-in 0.8s ease-out 0.1s forwards',
        'hero-fade-in-2': 'hero-fade-in 0.8s ease-out 0.2s forwards',
        'hero-fade-in-3': 'hero-fade-in 0.8s ease-out 0.35s forwards',
        'hero-fade-in-4': 'hero-fade-in 0.8s ease-out 0.5s forwards',
      },
    },
  },
  plugins: [],
}
