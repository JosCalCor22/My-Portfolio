/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pri-color': '#000000',
        'sec-color': '#FFFFFF',
        'ter-color': '#200730',
      },

      fontFamily: {
        hansen: ['Hansen Grotesk', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}