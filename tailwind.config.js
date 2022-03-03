const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  corePlugins: {
    preflight: false,
  },
  daisyui: {
    styled: true,
    themes: ['light', 'dark'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: 'dark',
  },
};
