const axios = require('axios');

const getCloset() => {
  return axios.get('/list', {
    params: {
      rating: 5
    }
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
}

const addItem(item, rating) => {
  axios.post('/calendar', {
    item: 'Blue sweatpants',
    rating: 1
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
}

const donateItem(item) => {
  axios.delete('/item', {

  })
}

