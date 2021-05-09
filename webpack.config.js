const path = require('path');


module.exports = {
     entry: './src/app.js',
     output: {
          path: path.join(__dirname, 'public'),
          filename: 'bundle.js'
     },
     module: {
          rules: [{
               loader: 'babel-loader',
               test: /\.js$/,
               exclude: /node_modules/,
               query: {
               presets: ['react', 'es2015'],
               plugins: ['transform-class-properties']
               }
          }, {
               test: /\.css$/,
               use: [
                    'style-loader',
                    'css-loader'
               ]
          }, {
               loader: 'url-loader',
               test: /\.(jpg|png)$/
               
          }, {
               loader: 'svg-url-loader',
               options: {
                    limit: 10000,
               },
               test: /\.svg$/
          }]
     },
     devtool: 'cheap-module-eval-source-map',
     devServer: {
          contentBase: path.join(__dirname, 'public'),
          historyApiFallback: true
     }
};