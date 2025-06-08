/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
       colors: {
        primaryred: '#b32a31',
        primarylight: "#E7787E"    
      },
    },
  },
  plugins: [],
}
