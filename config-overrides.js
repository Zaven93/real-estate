const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  webpack: function (config, env) {
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };
    config.optimization.runtimeChunk = false;
    if (env === "development") {
      config.plugins.push(new StylelintPlugin({}));
    }
    return config;
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
