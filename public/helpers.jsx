const axios = require('axios');

//CREATE
const addItem = (item, rating) => {
  return axios.post('/calendar', {item, rating})
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};

//READ
const getCloset = () => {
  return axios.get('/closet')
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
}

//UPDATE
const updateClothes = (old, newName) => {
  return axios.put('/item', {old, newName})
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
}

//DELETE
const donateItems = () => {
  axios.delete('/closet', {params: {}})
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error(error);
    })
}

module.exports.addItem = addItem;
module.exports.getCloset = getCloset;
module.exports.donateItems = donateItems;
module.exports.updateClothes = updateClothes;