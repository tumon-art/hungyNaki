/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dimWhite: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        rockNroll: ["RocknRoll One", "cursive"],
      },
    },
  },
  plugins: [],
};
