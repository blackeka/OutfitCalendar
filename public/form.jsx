import React from 'react';
import StarRatings from './node_modules/react-star-ratings';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      rating: 0
    };

    this.handleChange = this.handleItemChange.bind(this);
    this.handleChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleItemChange(e) {
    this.setState({item: e.target.item});
  }

  handleRatingChange(newRating) {
      this.setState({
        rating: newRating
      });
  }


  handleSubmit(e) {
    prompt(`You rated ${this.state.item}: ${this.state.rating} stars`);
    e.preventDefault();
  }

  render() {
    return (
      <div className="input-form" onSubmit={this.handleSubmit}>
        <form action="">
          <label>
            Clothing item:
            <input type="text" name="item" item={this.state.item} onChange={this.handleItemChange} />
          </label>
          <label className="rating">
            <StarRatings
              rating={rating}
              isSelectable={true}
              isAggregateRating={false}
              numOfStars={10}
              />
            // <div rating={this.state.rating} onChange={this.handleRatingChange}>
            //   <span rating="1" type="star" checked={this.state.rating}>☆</span>
            //   <span rating="2" type="star" checked={this.state.rating}>☆</span>
            //   <span rating="3" type="star" checked={this.state.rating}>☆</span>
            //   <span rating="4" type="star" checked={this.state.rating}>☆</span>
            //   <span rating="5" type="star" checked={this.state.rating}>☆</span>
            // </div>
          </label>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

export default Form;
