import React from 'react';
import Header from './header.jsx';
import Form from './form.jsx';
import Calendar from './calendar.jsx';
import helpers from './helpers.jsx';

class App extends React.Component {
  //click function for donate -- delete all clothes
  donate() {
    alert('hi')
    helpers.donateItems();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <button onClick={this.donate}>Donate</button>
        <Calendar />
      </div>
    )
  }
  
}

export default App;