import React, { Component } from 'react';
import "./css/Header.css";
import ClientDropdown from './ClientDropdown';
import PDPInput from './PDPInput';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="logo-div container">
          <span className='logo-text'>WatchTower</span>
        </div>

        <div className="form-input">
          <ClientDropdown />
          <PDPInput />
        </div>

      </div>
    )
  }
}

export default Header;
