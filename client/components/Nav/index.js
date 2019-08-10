import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="navigation-container">
        <ul className="navigation-container__ul">
          <li className="navigation-item__li">Category 1</li>
          <li className="navigation-item__li">Category 2</li>
          <li className="navigation-item__li">Category 3</li>
          <li className="navigation-item__li">Category 4</li>
          <li className="navigation-item__li">Category 5</li>
          <li className="navigation-item__li">Category 6</li>
          <li className="navigation-item__li">Category 7</li>
          <li className="navigation-item__li">Category 8</li>
        </ul>
      </div>
    )
  }
}