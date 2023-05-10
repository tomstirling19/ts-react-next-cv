const path = require('path');

module.exports = {
  trailingSlash: false,
  webpack: (config) => {
    config.resolve.alias['@/src'] = path.join(__dirname, 'src');
    return config;
  },
};
