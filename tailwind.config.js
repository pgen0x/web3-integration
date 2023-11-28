/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#effcfb",
          100: "#d6f7f7",
          200: "#b1ecf0",
          300: "#7bdee5",
          400: "#3bc5d1",
          500: "#23aab7",
          600: "#20899a",
          700: "#206f7e",
          800: "#225b68",
          900: "#214c58",
          950: "#10313c",
        },
      },
    },
  },
  plugins: [],
};
