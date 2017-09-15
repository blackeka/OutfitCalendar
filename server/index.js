const express = require('express');
const path = require('path');
const body = require('body-parser');
const routes = require('../routes.js');
const db = require('../db/index.js');

const app = express();

app.use(body.json());

app.use(express.static(path.join(__dirname, 'public'))); //can add /static later maybe _dirname
app.use('/', routes);

app.listen(3000, () => {
  console.log(`Listening on port: 3000`);
});