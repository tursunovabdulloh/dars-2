module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        favourite: "#fff",
        "custom-gray": "#1f1f1f",
        "custom-dark-gray": "#2e2e2e",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      scale: {
        110: "1.1",
        90: "0.9",
      },
      opacity: {
        80: "0.8",
      },
    },
  },
  plugins: [],
};
