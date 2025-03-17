/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:["poppins","sans-serif"],
        inter:["inter","sans-serif"],
      },
      colors: {
        primary: "#231A36",
        secondary: "#F59E0B",
        accent: "#10B981",
        ligth:"#fff2",
        bodyFontClr:"#425466",
        dark: {
          100: "#1F2937",
          200: "#111827",
        },
        bodyFontClr:"#426666",
        bgClr:'#231A36',
      },
      screens:{
        xs:"575px",
        sm:"768px",
        md:"992px",
        lg:"1200px",
        xl:"1400px"
      }
    },
  },
  plugins: [],
}