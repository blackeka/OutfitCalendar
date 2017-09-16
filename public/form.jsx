import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
// import helpers from './helpers.js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      rating: 0
    };

    this.handleItemChange = this.handleItemChange.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleItemChange(e) {
    this.setState({item: e.target.value});
  }

  onStarClick(nextValue, name) {
    this.setState({rating: nextValue});
  }


  handleSubmit(e) {
    let item = this.state.item;
    let rating = this.state.rating;
    let save = confirm(`You rated ${item}: ${rating} stars`);
    if (save) {
      //post to database
      // routes.post({item, rating});
    } 
    e.preventDefault();
  }

  render() {
    const { rating } = this.state;
    return (
      <div className="input-form" onSubmit={this.handleSubmit}>
        <form action="">
          <label>
            Clothing item:
            <textarea value={this.state.item} onChange={this.handleItemChange} />
          </label>
          <label className="rating">
            <StarRatingComponent
              name="Stars" 
              value={rating} 
              starCount={10} 
              onStarClick={this.onStarClick} 
              renderStarIcon={() => <span>☆</span>}        
              starColor="purple"
              emptyStarColor="#00ffc3" 
              editing={true} 
            />
          </label>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

export default Form;
