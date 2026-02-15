/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Portfolio/**/*.razor",
    "./Portfolio/**/*.html",
    "./Portfolio.Client/**/*.razor",
    "./Portfolio.Client/**/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ba5dc0",
        "background-light": "#f7f6f8",
        "background-dark": "#121216",
        "card-dark": "#1F1F27",
        "sidebar-dark": "#18181E"
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "sans": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
