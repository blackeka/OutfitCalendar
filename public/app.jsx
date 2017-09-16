import React from 'react';
import Header from './header.jsx';
import Form from './form.jsx';
import Calendar from './calendar.jsx';
import Update from './update.jsx';
import helpers from './helpers.jsx';

class App extends React.Component {
  //click function for donate -- delete all clothes
  donate() {
    confirm('Are you sure you want to donate all your clothes??')
    helpers.donateItems();
    <App />
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Update />
        <button onClick={this.donate}>Donate</button>
        <Calendar />
      </div>
    )
  }
  
}

export default App;