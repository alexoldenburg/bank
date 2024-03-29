const webpack = require('webpack');

module.exports = {
  entry: {
      index: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        //exclude: /node_modules|src\/views/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test:/\.(s*)css$/,
        exclude: /node_modules/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
