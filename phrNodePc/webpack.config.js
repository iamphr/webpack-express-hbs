const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const hotOpt = 'webpack-hot-middleware/client?reload=true';
const common = require('./utils/common');
const publickPath = path.resolve(__dirname, './public');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
//复制文件
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const entryJson = {};
common.readDirSync(publickPath).forEach((e,i) => {
  entryJson[e] = [`./public/${e}`,hotOpt];
});
console.log('ppppppp', `${path.resolve(__dirname, 'src')}/index.js`)
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

    //引入全局jq
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),


    new CopyWebpackPlugin([
      // { from: `${path.resolve(__dirname, 'src')}/index.js`, to: `${path.resolve(__dirname, 'static')}` },
      { from: `${path.resolve(__dirname, 'src')}/index.js`, to: 'static/libs' },
    ]),
    //强行写文件  但是会老是update
    // new WriteFilePlugin(),

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      //全局引入jq
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      },
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
