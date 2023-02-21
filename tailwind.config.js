/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost"],
      },
      colors: {
        gray: "rgba(22, 22, 22, 0.02)",
        blue: "bg-gradient-radial from-[#FFFFFF] to-[#83B2EE]",
      },
    },
  },
  plugins: [],
};
