const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const path = require('path');
const body = require('body-parser');
const webpackConfig = require('../webpack.config.js');
const routes = require('../routes.js');
const db = require('../db/index.js');

const app = express();
const compiler = webpack(webpackConfig);

app.use(body.json());
app.use(express.static(path.join(__dirname, '../public'))); //can add /static later maybe _dirname
app.set('port', (process.env.PORT || 3000));
app.use('/', routes);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.listen(app.get('port'));