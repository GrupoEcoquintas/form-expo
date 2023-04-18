const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
  fallback: {
    crypto: require.resolve('crypto-browserify'),
    tls: require.resolve('tls-browserify'),
    net: require.resolve('net-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert/')
  }
}
};
