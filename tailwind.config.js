/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111',   // Dark Background
        surface: '#1f1f1f',      // Slightly lighter for cards
        primary: '#3b82f6',      // Vibrant Blue (or change to #f59e0b for Gold)
        textMain: '#ffffff',     // White text
        textSub: '#a3a3a3',      // Gray text for subtitles
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean modern font
      }
    },
  },
  plugins: [],
}