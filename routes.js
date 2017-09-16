//routes go here

const routes = require('express').Router();
const Outfit = require('./app/model.js');

routes.post('/calendar', (req, res) => {
  console.log('this is request body', req.body)
  Outfit.create(req.body, (err, item) => {
    if (err) {
      console.error(err);
    } else {
      res.status(201).send(item);
    }
  });
});


routes.get('/closet', (req, res) => {
  Outfit.find({}, function(err, clothes) {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send(clothes);
    }
  });
});

module.exports = routes;