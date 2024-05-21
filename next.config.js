// next.config.js
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Custom webpack configuration
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  env: {
    CUSTOM_VARIABLE: "value",
  },
};
