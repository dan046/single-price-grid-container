/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        "custom-green": "#c0df34",
        "custom-gray": "#98a7bd",
      },
      backgroundColor: {
        "custom-white": "#e5eff5",
        "list-color": "#2ab2af",
        "custom-green": "#c0df34",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
}
