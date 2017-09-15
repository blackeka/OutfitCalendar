//mongoose model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let outfitSchema = new Schema({
  item: String,
  rating: Number
});

module.exports = mongoose.model('Outfit', outfitSchema);
