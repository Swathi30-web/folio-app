/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14142B',
        navy: '#1A1A3E',
        primary: {
          50: '#EEF0FF',
          100: '#E1E4FF',
          400: '#7B7FF6',
          500: '#5457E5',
          600: '#4143C7',
          700: '#3234A0',
        },
        lavender: '#B9A6F2',
        violet: '#8B7CF0',
        amber: '#FDB847',
        blush: '#F7A8C4',
        sky: '#BEE3F8',
        mist: '#F6F6FB',
        line: '#ECECF5',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(20, 20, 43, 0.25)',
        card: '0 12px 30px -12px rgba(20, 20, 43, 0.18)',
      },
      borderRadius: {
        xl2: '1.75rem',
      },
    },
  },
  plugins: [],
}

