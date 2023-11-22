// next.config.js
const path = require('path');

module.exports = {
  reactStrictMode: true,
  cssModules: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: 'custom'
  }
};
