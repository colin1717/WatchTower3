import React, { Component } from 'react';
import "./css/LoadingAnimation.css";

class LoadingAnimation extends Component {
  render() {
    return (
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    )
  }
}

export default LoadingAnimation;