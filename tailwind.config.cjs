module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // we'll toggle .dark on <html>
  theme: {
    extend: {
      colors: {
        cream: "#FAF6EE",
        darkbg: "#0b0c0f",
        accent: "#8b2f6b",
      },
      keyframes: {
        flicker: {
          "0%": { opacity: 0.15, transform: "scale(1)" },
          "10%": { opacity: 0.5, transform: "scale(1.02)" },
          "20%": { opacity: 0.22, transform: "scale(0.98)" },
          "30%": { opacity: 0.7, transform: "scale(1.04)" },
          "40%": { opacity: 0.25, transform: "scale(0.99)" },
          "60%": { opacity: 0.5, transform: "scale(1.01)" },
          "100%": { opacity: 0.15, transform: "scale(1)" },
        },
      },
      animation: {
        flicker: "flicker 2.2s linear infinite",
      },
    },
  },
  plugins: [],
};
