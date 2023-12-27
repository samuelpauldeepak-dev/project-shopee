/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-border": "#EBEAEA",
        "light-white": "#FAFAFB",
        "light-white-100": "#F1F4F5",
        "light-white-200": "#d7d7d7",
        "light-white-300": "#F3F3F4",
        "light-white-400": "#E2E5F1",
        "light-white-500": "#E4E4E4",
        gray: "#4D4A4A",
        "gray-100": "#D9D9D9",
        "gray-200": "#BFBFBF",
        "gray-300": "#ABABAB",
        "gray-600": "#3d3d4e",
        "black-100": "#252525",
        "primary-purple": "#9747FF",
        "blue-accent": "#e6eafa",
        "white-smoke": "#fafafb",
      },
      boxShadow: {
        menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
      },
      screens: {
        xs: "400px",
      },
      maxWidth: {
        "10xl": "1680px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4a5bf0",
          secondary: "#8f5df5",
          accent: "#DADCE0",
          neutral: "#F0F1F8",
          "base-100": "#ffffff",
          info: "#945EFF",
          success: "#4DAF2A",
          warning: "#F88C29",
          error: "#ed0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
