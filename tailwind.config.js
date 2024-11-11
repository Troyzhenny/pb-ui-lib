/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pb-yellow": "#FCD804",
        "pb-green": "#86A859",
        "pb-red": "#E64017",
        "pb-dark": "#252525",
        "pb-darker": "#121212"
      }
    },
  },
  plugins: [],
}

