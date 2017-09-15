const mongoose = require('mongoose');

mongoose.connect('mongodb://tester:test@ds135594.mlab.com:35594/outfit')

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongoose connection made!');
});

exports.module = db;