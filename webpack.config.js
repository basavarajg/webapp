var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
    login: APP_DIR + '/jsx/login.jsx',
    register: APP_DIR + '/jsx/register.jsx',
    maps: APP_DIR + '/jsx/gmap.jsx',
    material: APP_DIR + '/js/material.js'
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].bundle.js"
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader',
        exclude: /node_modules/
      },
      {
        test : /\.css?/,
        loader : ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
