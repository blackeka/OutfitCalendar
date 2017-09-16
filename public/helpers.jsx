const axios = require('axios');

const getCloset = () => {
  axios.get('/closet')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
}

const addItem = (item, rating) => {
  console.log(item, rating, 'axios stuff')
  return axios.post('/calendar', {
    item,
    rating
  })
  .then((response) => {
    console.log(response);
    return response;
  })
  .catch((error) => {
    console.error(error);
  });
};

const donateItem = (item) => {
  axios.delete('/item', {

  })
}

module.exports.addItem = addItem;
