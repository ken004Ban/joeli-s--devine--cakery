/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6EC',
        chocolate: '#3B1F0F',
        blush: '#E8A598',
        gold: '#C9A84C',
        'warm-white': '#FFFAF4',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['"Lato"', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
