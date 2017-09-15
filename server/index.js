const express = require('express');
const path = require('path');
const body = require('body-parser');

const app = express();

app.use(express.static('/public'));

app.post('/', (req, res) => {
  console.log('POST request');
});

app.get('/', (req, res) => {
	console.log('GET request');
})

app.listen(3000, () => {
  console.log(`Listening on port: 3000`);
});