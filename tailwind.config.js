module.exports = {
  content: [
    "./src/presentation/pages/**/*.{js,ts,jsx,tsx}",
    "./src/presentation/templates/**/*.{js,ts,jsx,tsx}",
    "./src/presentation/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-50": "#EEEEF2",
        "gray-100": "#D1D2DC",
        "gray-200": "#B3B5C6",
        "gray-300": "#9699B0",
        "gray-400": "#797D9A",
        "gray-500": "#616480",
        "gray-600": "#4B4D63",
        "gray-700": "#353646",
        "gray-800": "#1F2029",
        "gray-900": "#181B23",
        "primary-pink": "#d53f8c",
        "shape-darken": "#181B23",
        "shape-lighten": "#1F2029",
      },
      height: {
        "screen-menu": "calc(100vh - 96px)",
      },
      minHeight: {
        "2/6": "33.333333%",
      },
      fontFamily: {
        sans: ["Roboto", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["Roboto", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["Roboto", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["Roboto", "-apple-system", "BlinkMacSystemFont"],
        body: ["Roboto", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
