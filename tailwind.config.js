/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { keyframes: {
      slideInRight: {
        '0%': { transform: 'translateX(0)', opacity: '0' },
        '100%': { transform: 'translateX(100)', opacity: '1' },
      },
    },
    animation: {
      slideInRight: 'slideInRight 3s ease-out forwards',
    },
    colors: {
      brown: {
        light: '#d7b19d', // light brown
        DEFAULT: '#a0522d', // saddle brown (default)
        dark: '#654321', // dark brown
      },
    },
  },
  },
  plugins: [],
}
