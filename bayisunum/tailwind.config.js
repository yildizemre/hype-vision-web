/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        vision: {
          DEFAULT: '#00cadc',
          dark: '#009bb0',
          light: '#33d5e5',
          50: '#e8f7f9',
          100: '#d4f1f4',
        },
        night: '#0A0A0A',
      },
    },
  },
  plugins: [],
};
