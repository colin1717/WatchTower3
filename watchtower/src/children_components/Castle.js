import React, { Component } from 'react';
import './css/Castle.css';

class Castle extends Component{
  render() {

    return(
      <div className="castle" onClick={this._handleClick.bind(this)}>
        {(this.props.warning === 'warning') ? <div className="castle-pic-warning"></div> : <div className="castle-pic"></div>}
        {(this.props.warning === 'warning') ? <div className="castle-text-warning">{ this.props.title }</div> : <div className="castle-text">{ this.props.title }</div>}
      </div>
    )
  }

  _handleClick() {
    this.props.handleClick(this.props.title);
  }
}

export default Castle;
