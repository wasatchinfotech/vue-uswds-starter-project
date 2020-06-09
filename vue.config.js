const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = {
  configureWebpack: {
    plugins: [

      new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'node_modules/uswds/dist/img'), to: 'assets/img' }
        ],
      })
      
    ]
  }
};