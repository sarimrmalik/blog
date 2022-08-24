module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      garamond: ["'EB Garamond', serif"],
      redhat: ["'Red Hat Display', sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
