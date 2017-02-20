import React, { Component } from 'react';
import "./css/Header.css";
import PDPInput from './PDPInput';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="logo-div container">
          <span className='logo-text'>WatchTower</span>
        </div>

        <PDPInput />

      </div>
    )
  }
}

export default Header;
