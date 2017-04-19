import React, { Component } from 'react';

class PDPInput extends Component {
  render() {
    return(
      <div className='form-input'>
        <div className="client-dropdown">
          <input type="text" placeholder="Client Name" ref={(input) => this.clientName = input}></input>
        </div>
        <div className="pdp-input">
          <input type="text" placeholder="Product Display Page URL" ref={(input) => this.PDPUrl = input}></input>
          <div className="submit-button" onClick={this._handleSubmit.bind(this)}>Submit</div>
        </div>
      </div>
    )
  }

  _handleSubmit() {
    console.log('========PDPInput=========');
    let clientName = this.clientName.value;
    let PDPUrl = this.PDPUrl.value;
    console.log(`clientName: ${clientName}`);
    console.log(`PDPUrl: ${PDPUrl}`);
    this.props.fetchData(clientName, PDPUrl);
    this.props.showLoadingAnimation();
  }
}

export default PDPInput;
