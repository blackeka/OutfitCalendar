const mongoose = require('mongoose');

mongoose.connect('mongodb://tester:test@ds135594.mlab.com:35594/outfit')

var outfit = mongoose.model('Outfit', new Schema({  }))

