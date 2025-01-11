/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#556B2F',
          dark: '#3d4e20', //3
          light: '#748758', //3
          bg: '#556B2F0D',
          'bg-dark': '#1c250c', //6
          'bg-light': '#edefe9', //9
        },
        secondary: {
          DEFAULT: '#4B3621',
          dark: '#352516',
          light: '#6c5a49',
          bg: '#4B36210D',
          'bg-dark': '#170f06',
          'bg-light': '#ece9e6',
        },
        slate: {
          DEFAULT: '#2F4F4F',
          dark: '#203838',
          light: '#566f6f',
          bg: '#2F4F4F0D',
          'bg-dark': '#0c1919',
          'bg-light': '#e8ecec',
        },
        rich: {
          DEFAULT: '#1C1C1C',
          dark: '#121212',
          light: '#f2f2f2',
          bg: '#1C1C1C0D',
          'bg-dark': '#050505',
          'bg-light': '#f0f0f0',
        }
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
} 