const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlAfterWebpackPlugin = require('./build/webapp/views/htmlAfterWebpackPlugin');

module.exports = {
  entry: __dirname + "/src/webapp/assets/js",
  output: {
    path: __dirname + "/build/webapp", //打包后的文件存放的地方
    filename: "assets/index-[hash:5].js" //打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("assets/main-[hash:5].css"),
    new HtmlWebpackPlugin({
      title:'模板页面',
      template: 'src/webapp/views/layout.html',
      filename: 'views/layout.html',
      inject:false,//阻止注入
    }),
    new HtmlWebpackPlugin({
      title:'index.html',
      template: 'src/webapp/views/index.html',
      filename: 'views/index.html',
      inject:false,//阻止注入
    }),
    new htmlAfterWebpackPlugin()
  ]
};
