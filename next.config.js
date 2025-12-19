const path = require('path');

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },

  webpack: (config) => {
    config.resolve.alias['@/src'] = path.join(__dirname, 'src');
    return config;
  },
};

module.exports = nextConfig;
