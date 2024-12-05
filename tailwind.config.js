/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SuisseIntl', 'sans-serif'], // Default sans-serif font
        serif: ['Mondwest', 'serif'],      // Optional serif font
      },
    },
  },
  darkMode: false,
  plugins: [],
};
