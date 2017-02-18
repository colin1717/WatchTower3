import React, { Component } from 'react';
import './css/MessageBox.css';

class MessageBox extends Component {
  render() {

    let activeTab;

    if (this.props.selected == "BVSEO") {
      activeTab = "message-box-bvseo";
    } else if (this.props.selected == "BVRRSummary") {
      activeTab = "message-box-bvsummary";
    } else if (this.props.selected == "BVRRContainer") {
      activeTab = "message-box-bvrr";
    } else if (this.props.selected == "BVQAContainer") {
      activeTab = "message-box-bvqa";
    } else {
      activeTab = "message-box-bvapi";
    };


    return (
      <div className={activeTab}>
        <div className="message-box-text">
          <span className="warning-text">Warning: </span><span className='message-text'>BVQA Container not detected on this page.</span>
        </div>
      </div>
    )
  }
}

export default MessageBox;
