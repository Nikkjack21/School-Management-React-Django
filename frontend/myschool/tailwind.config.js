/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ['Poppins']
     },
     animation: {
      shine: "shine 1s",
    },
    keyframes: {
      shine: {
        "100%": { left: "125%" },
      },
    },
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },

  },
  
  plugins: [

    require("tailwind-scrollbar-hide"),
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
