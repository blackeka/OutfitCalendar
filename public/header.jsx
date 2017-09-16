import React from 'react';
import helpers from './helpers.jsx';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> Outfit Calendar </h1>
        <ul  className="nav nav-tabs">
          <li className="active"><a href="/main" onClick="goHome()">Main</a></li>
          <li><a href="/calendar" onClick="helpers.getCloset()">Calendar</a></li>
          <li><a href="/closet" onClick="viewCalendar()">Closet</a></li>
        </ul>  
      </div>
    );
  }
}

export default Header;
