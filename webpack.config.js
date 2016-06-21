var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: 'public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  // plugins: [
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.UglifyJsPlugin()
  // ],
  devtool: 'source-map'
}
