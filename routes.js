//routes go here

const routes = require('express').Router();
const Outfit = require('./app/model.js');

routes.post('/', (req, res) => {
  console.log('this is request body', req.body)
  Outfit.create(req.body, (err, item) => {
    if (err) {
      console.error(err);
    } else {
      console.log(item);
      res.status(201).send(item);
    }

  });

});


routes.get('/', (req, res) => {
  
  Outfit.find({}, function(err, item) {
    if (err) 
  });
  res.send('processing outfit!')
});

module.exports = routes;