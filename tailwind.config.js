module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Your file paths
  ],
  theme: {
    extend: {
      backgroundImage: {
        instaBg: " url('/src/assets/images/instaBg.png')",
        packagepay: " url('/src/assets/images/packagepay.jpg')",
        downloadbg: " url('/src/assets/images/downloadbg.png')",
        wellstdbg: " url('/src/assets/images/wellstd.png')",
        fitsuite: " url('/src/assets/images/fitsuite.png')",
      },
      colors: {
        customBlueDark: "#030429",
        customBlueLight: "#5458F7",
      },
    },
    fontFamily: {
      inter: ["inter", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
      dmsans: ["DM Sans", "sans-serif"],
      lexend:["Lexend", "sans-serif"],
    },
    screens: {
      
      xs: "320px",
      // => @media (min-width: 320px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "738px",
      // => @media (min-width: 768px) { ... }
      lg: "1200px",
      // => @media (min-width: 1024px) { ... }
      xl: "1380px",
      // => @media (min-width: 1280px) { ... }
     
    },
  },
  plugins: [],
};
