/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // MAIN
        main: {
          0: "#FF8171",
          100: "#FFE7E7",
          200: "#FF7D68",
          300: "#FF6D5A",
        },

        // GRAYSCALE
        gray: {
          0: "#F2F2F2",
          100: "#757575",
          200: "#585858",
          300: "#9D9D9D",
          400: "rgba(0,0,0,0.62)",
          500: "rgba(0,0,0,0.4)",
          600: "rgba(0,0,0,0.5)",
          700: "#E6E6E6",
        },

        // ETC
        black: "#000000",
        red: "#FF1F1F",
        green: "#FF4646",
        brown: "rgba(138,112,73,0.8)",
        white: "#FFFFFF",
      },

      // 폰트 설정
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
