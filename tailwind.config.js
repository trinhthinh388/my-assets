module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      brown: '#4F3E3D',
      lightBrown: '#4F453D',
      green: '#728B75',
      darkGreen: '#2F3D31',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
