const path = require('path');

module.exports = {
  entry: '/test_app_1/static/test_app_1/index-webpack.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'test_app_1/static/test_app_1'),
    publicPath: "/static/",
  },
};