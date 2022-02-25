module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      rotate: {
        62: '62deg',
        30: '30deg',
        25: '25deg',
      },
      colors: ({ colors }) => ({
        ...colors,
        primary: '#333333',
        secondary: '#999999',
      }),
    },
    colors: {
      brown: '#4F3E3D',
      lightBrown: '#4F453D',
      green: '#728B75',
      darkGreen: '#2F3D31',
    },
    fontWeight: {
      extrabold: 900,
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
