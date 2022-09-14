module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      garamond: ["'EB Garamond', serif"],
      redhat: ["'Red Hat Display', sans-serif"],
      ibm: ["'IBM Plex Sans', sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
