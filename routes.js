//routes go here

const routes = require('express').Router();
const Outfit = require('./app/model.js');

//CREATE
routes.post('/calendar', (req, res) => {
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
routes.put('/item', (req, res) => {
  let old = {item: req.body.old};
  let newName = {item: req.body.newName};
  
  Outfit.findOneAndUpdate(old, newName, null, (err) => {
    if (err) {
      console.error(err);
      res.status(400).send('I can\'t do that, Hal.')
    } else {
      res.status(201).send(`${old} was updated to: ${newName}`);
    }
  })
})

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