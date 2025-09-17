/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {keyframes: {
      'flip-down': {
        '0%': { transform: 'rotateX(0deg)', opacity: 1 },
        '100%': { transform: 'rotateX(-90deg)', opacity: 0 }
      },
      'flip-up': {
        '0%': { transform: 'rotateX(90deg)', opacity: 0 },
        '100%': { transform: 'rotateX(0deg)', opacity: 1 }
      }
    },
    animation: {
      'flip-down': 'flip-down 300ms ease-in',
      'flip-up': 'flip-up 300ms ease-out'
    }
  },
  },
  plugins: [],
}

