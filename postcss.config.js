const path = require('path');
const root = path.join(__dirname, 'app');

module.exports = (w) => ({
  map: 'inline',
  plugins: {
    'postcss-import': {
      path: [`${root}/styles`],
      addDependencyTo: w,
    },
    'postcss-reporter': {},
    'postcss-browser-reporter': {},
    'postcss-cssnext': {},
    'postcss-url': {},
    'postcss-flexbugs-fixes': {},
    'rucksack-css': {},
    lost: {},
  },
});
