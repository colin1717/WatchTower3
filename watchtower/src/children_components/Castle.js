import React, { Component } from 'react';
import './css/Castle.css';

class Castle extends Component{
  render() {

    let castleStatus;

    return(
      <div className="castle">
        {(this.props.warning == 'warning') ? <div className="castle-pic-warning"></div> : <div className="castle-pic"></div>}
        {(this.props.warning == 'warning') ? <div className="castle-text-warning">{ this.props.title }</div> : <div className="castle-text">{ this.props.title }</div>}
      </div>
    )
  }
}

export default Castle;
