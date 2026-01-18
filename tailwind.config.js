/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // I added these so you can use 'bg-dark' or 'text-cyan' if you want custom names
        dark: '#050A15', 
        cyan: {
          DEFAULT: '#22d3ee', // Matches cyan-400
          glow: '#22d3ee',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}