/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F8F7F4',
        'surface': '#FFFFFF',
        'primary': '#4A4E69',
        'accent': '#9A8C98',
        'text-primary': '#22223B',
        'text-secondary': '#4A4E69',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}