const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-uswds-starter-project/'
    : '/',
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "node_modules/uswds/dist/img"),
            to: "assets/img"
          }
        ]
      })
    ]
  }
};
