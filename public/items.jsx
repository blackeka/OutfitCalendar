import React from 'react';
import helpers from './helpers.jsx';

let Items = (props) => (
  <div>
    <ul>
      {props.clothes.map((item) => (
          <li>
            <span>
              {item['item'] + ': ' + item['rating']}
              <span>☆</span>
              stars!
            </span>
          </li>
        ))}
    </ul>
  </div>
);


export default Items;