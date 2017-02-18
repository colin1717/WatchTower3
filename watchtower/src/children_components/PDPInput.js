import React, { Component } from 'react';

class PDPInput extends Component {
  render() {
    return(
      <div className="pdp-input">
        <input type="text" placeholder="Product Display Page URL"></input>
        <div className="submit-button">Submit</div>
      </div>
    )
  }
}

export default PDPInput;
