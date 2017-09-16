import React from 'react';
import Header from './header.jsx';
import Form from './form.jsx';
import Calendar from './calendar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date(),
      lastWeek: null
    } 
  }
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Calendar />
      </div>
    )
  }
  
}

export default App;