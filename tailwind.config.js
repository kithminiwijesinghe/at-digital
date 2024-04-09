/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#6B3CC9",
        "custom-light-purple": "#FAF8FF",
        "custom-orange": "#F28D35",
        "custom-green": "#1CBDDD",
        "custom-blue": "#4DCA79",
      },
    },
  },
  plugins: [],
};
