const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const hotOpt = 'webpack-hot-middleware/client?reload=true';
const common = require('./utils/common');
const publickPath = path.resolve(__dirname, './public');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const entryJson = {};
common.readDirSync(publickPath).forEach((e,i) => {
  entryJson[e] = [`./public/${e}`,hotOpt];
});

module.exports = {
  // entry: {
  //   index: ['./public/home',hotOpt],
  // },
  entry: entryJson,
  devtool: 'inline-source-map',//开发环境，寻找错误原因
  // devServer: {
  //   contentBase: './dist'n
  // },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '争时金融'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader :'babel-loader',
            query: {
              presets: ['latest'] //按照最新的ES6语法规则去转换
              // presets: ['es2015']
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // {
      //   test: /\.hbs$/,
      //   use: [
      //     'handlebars-loader'
      //   ]
      // },
    ]
  },
  // node: {
  //   fs: 'empty',
  //   net: 'empty'
  // },
};
