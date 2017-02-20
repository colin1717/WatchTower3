import React, { Component } from 'react';

class PDPInput extends Component {
  render() {
    return(
      <div className='form-input'>
        <div className="client-dropdown">
          <input type="text" placeholder="Client Name"></input>
        </div>
        <div className="pdp-input">
          <input type="text" placeholder="Product Display Page URL"></input>
          <div className="submit-button">Submit</div>
        </div>
      </div>
    )
  }
}

export default PDPInput;
