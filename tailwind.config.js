/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/views/**/*.ejs'],
  theme: {
    extend: {
      colors:{
        primary: "#FFC0CB", // other background
        secondary:"#98FF98", //borders and text
        highlight:"#FFFDD0", //text 
        background:"#F5F5F5", //background
        text:"#333333", //text
      },
      padding:{
        sm:"10px",
        md:"24px",
        lg:"60px",
        xl:"120px"
      }
    },
  },
  plugins: [],
};