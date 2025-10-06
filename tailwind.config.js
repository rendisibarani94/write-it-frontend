/** @type {import('tailwindcss').Config} */


// tailwind custom 


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',
    },

    extend: {
      colors: {
        purple: "#8A38F5",
        green: "#34C759",
      },
    },
  },
  plugins: [],
};
