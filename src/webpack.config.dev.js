/* eslint-disable */

'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, '../dist/') ,
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}