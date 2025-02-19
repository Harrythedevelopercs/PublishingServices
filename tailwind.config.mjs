/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    prefix: "",
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      "xs": { "max": "576px" },
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px",
    },  
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(98deg, rgba(224,208,207,1) 0%, rgba(229,204,198,1) 50%, rgba(234,234,234,1) 100%)"
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        comfortaa: ["var(--font-comfortaa)", "sans-serif"],
      },
      colors:{
        primary: "#58D639",
        secondary: "#2D2D2D"
      },
      backgroundColor:{
        primary: "#58D639",
        secondary: "#2D2D2D"
      }
    },
  },
  plugins: [],
};
