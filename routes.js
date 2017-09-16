//routes go here

const routes = require('express').Router();
const Outfit = require('./app/model.js');

//CREATE
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

//READ
routes.get('/closet', (req, res) => {
  Outfit.find({})
    .exec(function(err, clothes) {
      if (err) {
        console.error(err);
      } else {
        res.status(200).send(clothes);
      }
    });
});

//UPDATE
// routes.get('/item')

//DELETE
routes.delete('/closet', (req, res) => {
  Outfit.remove({}, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send('Data was Cleared!');
    }
  })
});

module.exports = routes;