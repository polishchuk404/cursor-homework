let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
  mode: 'development',
  entry: ["babel-polyfill", "./src/script.js"],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
      new HtmlWebpackPlugin({
          filename: "index.html",
          template: "src/index.html"
      })
  ],
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: [
            { loader: 'style-loader', options: { injectType: 'styleTag' } },
            'css-loader',
          ],       
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
    ]
  },
  watch: true,
  devtool: "source-map"
};


  
