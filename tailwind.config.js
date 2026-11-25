/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      '2xl-mx': { max: '1535px' },
      'xl-mx': { max: '1279px' },
      'lg-mx': { max: '1023px' },
      'bs-mx': { max: '899px' },
      'md-mx': { max: '767px' },
      'sm-mx': { max: '639px' },
      'xs-mx': { max: '475px' },
      'xsm-mx': { max: '349px' },
    },
    extend: {
      colors: {
        bgColor: "#112240",
        primaryColor: "#64FFDA",
        textColor: "#8892B0",
        whiteColor: "#CCD6F6",
        redColor: "#FF0000",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
      animation: {
        "background-position-spin": "background-position-spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};