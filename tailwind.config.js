/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50" : "#909eff",
          "100": "#8694ff",
          "200": "#7c8aff",
          "300": "#7280fb",
          "400": "#6876f1",
          "500": "#5e6ce7",
          "600": "#5462dd",
          "700": "#4a58d3",
          "800": "#404ec9",
          "900": "#3644bf",
        },
      },
    },
  },
  plugins: [],
}
