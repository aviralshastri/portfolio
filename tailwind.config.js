/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        CustomBrown: "#480202",
        CustomBlue: "#2584f9",
        CustomYellow: "#faaf2a",
        CustomRed: "#fc4c21",
        CustomGreen: "#b7ce1f",
        CustomPink: "#fe99be",
      },
    },
  },
  plugins: [],
};
