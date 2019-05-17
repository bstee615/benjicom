'use strict'

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
  mode: 'production',
  entry: [
    './src/backend/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: []
};

const { VueLoaderPlugin } = require('vue-loader');

const webConfig = {
    mode: 'production',
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
    ]
};

if (!process.env.NO_HOTLOAD) {
    const NodemonPlugin = require('nodemon-webpack-plugin');
  
    serverConfig.plugins.push(new NodemonPlugin());
}

module.exports = [serverConfig, webConfig];