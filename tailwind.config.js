/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3F0E6",
        sage: "#A5AD91",
        olive: "#777D58",
        dust: "#9B8068",
        brick: "#B76E5B",
        sky: "#8298A5",
        mustard: "#C5AC70",
        ink: "#35332E",
        cream: "#FAF8F0",
      },
      fontFamily: {
        display: ['"Bowlby One"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        type: ['"Special Elite"', '"Courier New"', "monospace"],
        hand: ['"Caveat"', "cursive"],
      },
    },
  },
  plugins: [],
};
