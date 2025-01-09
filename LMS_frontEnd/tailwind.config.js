/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        kumbh: ['"Kumbh Sans"', 'sans-serif'],
      },
      backgroundColor: {
        'red-custom': '#4E0A0A',
        'yellow-custom': '#F9C524',
      },
      colors: {
        'yellow-custom': '#F9C524',
        'red-custom': '#4E0A0A',
      },
      fontWeight: {
        'custom-custom': '550',
      },
      width: {
        'custom': '80%',
      },
      height: {
        'custom': '3.5px',
      },
      fontSize: {
        'xl-custom': '24px',
      }
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
        '.list-point-image': {
          'list-style-image': 'url(./assets/Point.png)',
          'background-size': '2px 2px',  // Set the width and height of the bullet image here
          'background-repeat': 'no-repeat',
          'background-position': 'left center',
        },
        // Add more custom utilities here as needed
      });
    },
  ],
};
