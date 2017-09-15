const webpack = require('webpack');
const path = require('path');

//represents the directory path of the vundle file output
const BUILD_DIR = path.resolve(__dirname, 'public');
//holds the directory path of the of the React app codebase
const APP_DIR = path.resolve(__dirname, 'public');

const = config = {
  //specifies the entry file - starts bundling process
  entry: APP_DIR + '/index.jsx',
  //instructs what to do after the bundling
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
