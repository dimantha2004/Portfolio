/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#d9e2ff',
          200: '#bccdff',
          300: '#96afff',
          400: '#7488ff',
          500: '#5b5ef9',
          600: '#4838ef',
          700: '#3d29d3',
          800: '#3123aa',
          900: '#2c2487',
          950: '#1b1452',
        },
        secondary: {
          50: '#f4f7fb',
          100: '#e9eff6',
          200: '#cedee9',
          300: '#a4c3d6',
          400: '#74a3bf',
          500: '#5286a5',
          600: '#416d89',
          700: '#365870',
          800: '#304a5d',
          900: '#2a3f4f',
          950: '#192833',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd2',
          200: '#ffdca5',
          300: '#ffc26d',
          400: '#ff9e33',
          500: '#ff7f0a',
          600: '#ff6600',
          700: '#cc4102',
          800: '#a1310b',
          900: '#832a0c',
          950: '#461203',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};