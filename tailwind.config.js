/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#0B1120',
          surface: '#1E293B',
          primary: '#38BDF8',
          secondary: '#94A3B8',
          text: '#F8FAFC'
        }
      }
    },
  },
  plugins: [],
}
