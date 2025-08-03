/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      colors: {
        blue: {
          600: '#0d6efd',
        },
      },
    },
  },
  plugins: [],
};
