/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F1E9D2",
        "paper-dark": "#E4D9B8",
        ink: "#2B2A28",
        stamp: "#A63A2E",
        ledger: "#33544A",
        line: "#B8AD8C",
      },
      fontFamily: {
        mono: ["'IBM Plex Mono'", "monospace"],
        sans: ["'IBM Plex Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
