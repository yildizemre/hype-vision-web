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
          200: '#b8eef5',
        },
        night: '#0A0A0A',
        anthracite: '#1a1a1a',
      },
      backgroundImage: {
        'vision-gradient': 'linear-gradient(135deg, #009bb0 0%, #00cadc 100%)',
      },
      boxShadow: {
        vision: '0 4px 14px rgba(0, 0, 0, 0.08)',
        card: '0 1px 3px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
