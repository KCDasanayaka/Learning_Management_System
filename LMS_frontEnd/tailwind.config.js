/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        kumbh: ['"Kumbh Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.font-optical': {
          'font-optical-sizing': 'auto',
        },
        '.font-yopq-300': {
          'font-variation-settings': '"YOPQ" 300',
        },
        // Add more custom utilities here as needed
      });
    },
  ],
};

