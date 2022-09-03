/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dc2626",
        primaryDim: "#b51111",
        dim: "#fee2e2",
      },
      fontFamily: {
        rockNroll: ["RocknRoll One", "cursive"],
      },
    },
  },
  plugins: [],
};
