/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable dark mode

  theme: {
    extend: {
      backgroundColor: {
        light: "#ffffff",
        dark: "#000000",
      },
      textColor: {
        light: "#000000",
        dark: "#ffffff",
      },
    },
  },
  plugins: [],
}

