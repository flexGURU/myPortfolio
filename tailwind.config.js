/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Lexend"]
      },
      colors: {
        body: "#2a2f34",
        innerbody: "#1a1d1f",
      }
    },
  },
  plugins: [],
}