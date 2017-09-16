import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import helpers from './helpers.jsx';
import Items from './items.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      rating: 0,
      isToggleOn: false,
      clothes: []
    };

    this.showClothes = this.showClothes.bind(this);
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
    let rating = Number(this.state.rating);
    let save = confirm(`You rated ${item}: ${rating} stars`);
    if (save) {
      //post to database
      helpers.addItem(item, rating);
      this.setState({
        item: '',
        rating: 0
      })
    } 
    e.preventDefault();
  }

  showClothes() {
    let items = helpers.getCloset()
    items.then((data) => {
      console.log(data)
      this.setState((prevState) => ({
        isToggleOn: !prevState.isToggleOn,
        clothes: data.data
      }));
      return;
    })
    
  }

  render() {
    return (
      <div>
        <div className="input-form" onSubmit={this.handleSubmit}>
          <form action="">
            <label>
              Clothing item:
              <textarea value={this.state.item} onChange={this.handleItemChange} />
            </label>
            <label className="rating">
              <StarRatingComponent
                name="Stars" 
                value={this.state.rating} 
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
        <div className="button">
          <button className="btn" onClick={this.showClothes} >
            Show Clothes 
            {this.state.isToggleOn ? (
              <Items clothes={this.state.clothes}/>
              ) : (
              <div></div>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
