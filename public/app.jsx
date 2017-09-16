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
        <Calendar today={this.state.today} lastWeek={this.state.lastWeek}/>
      </div>
    )
  }
  
}

export default App;