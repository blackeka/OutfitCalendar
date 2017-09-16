import React from 'react';
import helpers from './helpers.jsx';

class Header extends React.Component {

  render() {
    return (
      <div>
        <h1> Outfit Calendar </h1>
        <ul  className="nav nav-tabs">
          <li className="active"><a href="/main" >Main</a></li>
          <li><a href="#">Closet</a></li>
        </ul>  
      </div>
    );
  }
}

export default Header;
