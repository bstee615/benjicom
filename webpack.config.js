'use strict'

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const dev = process.env.NODE_ENV === 'development';

const serverConfig = {
  mode: dev ? 'development' : 'production',
  entry: [
    './src/backend/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [],
  devtool: dev ? 'source-map' : false
};

const { VueLoaderPlugin } = require('vue-loader');

const webConfig = {
    mode: dev ? 'development' : 'production',
    entry: [
      './src/web/main.js'
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
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
    ],
    devtool: dev ? 'source-map' : false
};

if (!process.env.NO_HOTLOAD) {
    const NodemonPlugin = require('nodemon-webpack-plugin');
  
    serverConfig.plugins.push(new NodemonPlugin());
}

module.exports = [serverConfig, webConfig];