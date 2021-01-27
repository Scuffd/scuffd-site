/* eslint-env node */

module.exports = {
  purge: [
    './app/index.html',
    './app/templates/**/*.hbs',
    './app/components/**/*.hbs',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
