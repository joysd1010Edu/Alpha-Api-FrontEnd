/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
      fontFamily: {
        'cascade': ['Cascadia Code', 'sans-serif'], 
        'meri': ['Merriweather', 'serif'], 
        'display': ['Playfair Display', 'serif']
      },
  },
  plugins: [],
}