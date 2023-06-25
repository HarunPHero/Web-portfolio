/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      mono: ['Rowdies',...defaultTheme.fontFamily.sans],
      text:['Anton', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        portfoliotheme: {
          primary: "#ff476b",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#AFB7CA",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
