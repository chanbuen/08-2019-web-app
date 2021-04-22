import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="logo-container">
          <img src={window.location.origin + '/images/logo.png'}></img>
          </div>
        </div>
        <div className="navigation-container">
          <ul className="navigation-container__ul">
            <li className="navigation-item__li"><span>Category</span></li>
            <li className="navigation-item__li"><span>Category</span></li>
            <li className="navigation-item__li"><span>Category</span></li>
            <li className="navigation-item__li"><span>Category</span></li>
            <li className="navigation-item__li"><span>Category</span></li>
            <li className="navigation-item__li"><span>Category</span></li>
            <li className="navigation-item__li"><span>Category</span></li>
            <li className="navigation-item__li"><span>Category</span></li>
          </ul>
        </div>
      </div>
    )
  }
}