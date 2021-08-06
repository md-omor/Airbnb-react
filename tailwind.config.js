module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Roboto"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald", "ROBOTO"],
        body: ['"Open Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
