module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        primary: "#043c63",
        secondary: "#0c738b",
        "sea-blue": "#043c63",
        teal: "#0c738b",
      },
    },
  },
  plugins: [],
};
