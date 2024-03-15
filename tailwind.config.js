/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#2A3950",
        primary: "#0F6BAE",
        secondary: "#24BBD6",
        tertiary: "#83B8FF",
        quaternary: "#C6CDFF",
      },

      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "-apple-system"],
      },
    },
  },
  plugins: [],
};
