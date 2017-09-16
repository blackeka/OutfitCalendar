import React from 'react';
import helpers from './helpers.jsx';

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      old: '',
      newName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(event.target.className === 'old-name') {
      this.setState({
        old: event.target.value, 
      });
    } else {
      this.setState({
        newName: event.target.value, 
      });
    }
  }

  handleSubmit(event) {
    helpers.updateClothes(this.state.old, this.state.newName);
    this.setState({
      old: '', 
      newName: ''
    });
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Old Name:
            <input type="text" className="old-name" onChange={this.handleChange} />
          </label>
          <label>
            New Name:
            <input type="text" className="new-name" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Update;
