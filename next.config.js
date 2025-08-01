// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // <== THIS LINE FIXES THE ERROR
  },
};

module.exports = nextConfig;
