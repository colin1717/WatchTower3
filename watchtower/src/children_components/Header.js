import React, { Component } from 'react';
import "./css/Header.css";
import ClientDropdown from './ClientDropdown';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="logo-div container">
          <span className='logo-text'>WatchTower</span>
        </div>

        <div className="form-input">
          <ClientDropdown />
          <div className="pdp-input">
            <input type="text" placeholder="Product Display Page URL"></input>
            <div className="submit-button">Submit</div>
          </div>
        </div>

      </div>
    )
  }
}

export default Header;
