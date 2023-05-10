const path = require('path');

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ts-react-next-cv' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/ts-react-next-cv' : '',
  trailingSlash: false,
  webpack: (config) => {
    config.resolve.alias['@/src'] = path.join(__dirname, 'src');
    return config;
  },
};
