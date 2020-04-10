const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    { loader: 'css-loader', options: { importLoaders: 1 } },
    'postcss-loader'
]
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
