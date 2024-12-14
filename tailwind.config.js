/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", " sans-serif"],
      },
      colors: {
        "black-shade-1": "#0F0F0F",
        "black-shade-2": "#141414",
        "black-shade-3": "#1A1A1A",
        "black-shade-4": "#1F1F1F",
        "black-shade-5": "#262626",
        "black-shade-6": "#333333",
        "black-shade-7": "#404040",
        "black-shade-8": "#4C4C4C",

        "gray-shade-1": "#999999",
        "gray-shade-2": "#A6A6A6",
        "gray-shade-3": "#B3B3B3",
        "gray-shade-4": "#BFBFBF",
        "gray-shade-5": "#E4E4E7",
        "gray-shade-6": "#F1F1F3",
        "gray-shade-7": "#F7F7F8",
        "gray-shade-8": "#FCFCFD",

        "red-shade-1": "#E50000",
        "red-shade-2": "#FF0000",
        "red-shade-3": "#FF1919",
        "red-shade-4": "#FF3333",
        "red-shade-5": "#FF9999",
        "red-shade-6": "#FFCCCC",
        "red-shade-7": "#FFE5E5",
        "red-shade-8": "#FFFAFA",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
};
