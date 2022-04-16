var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index_bundle.js'
    },
    module: {
         rules:[
            { test: /\.(ts|tsx|js|jsx)$/, exclude: /node_modules/, use: [ 'babel-loader' ] },
            { test:/\.css$/, use: ['style-loader', 'css-loader']} 
          ]
    },
    resolve: {
        alias: {
          common: path.resolve(__dirname, 'src/common/'),
          ui: path.resolve(__dirname, 'src/ui/'),
          utils: path.resolve(__dirname, 'src/utils/'),
          views: path.resolve(__dirname, 'src/views'),
        },
        extensions: [ '.tsx', '.ts', '.js', '.jsx', '.css' ]
      },
    mode: 'development',
    plugins:[
         new HtmlWebpackPlugin({
            template:'src/index.html'
         })
    ]
}
