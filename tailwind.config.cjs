/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        fill: "repeat(auto-fill, minmax(22rem, 1fr))",
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "emerald", "garden"],
  },
};
