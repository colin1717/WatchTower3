import React, { Component } from 'react';
import './css/ResultsDisplay.css';
import Castle from './Castle';
import MessageBox from './MessageBox';

class ResultsDisplay extends Component {
  constructor() {
    super();

    this.state = {
      activeTab: 'BVAPI'
    }
  }

  render() {
    return (
      <div className="results-display">
        <div className="display-features">
          <span className='display-features-text'>Display Features</span>
          <div className="display-features-castles">
            <Castle title="BVAPI" handleClick={this._handleClick.bind(this)}/>
            <Castle title="BVRRSummary" handleClick={this._handleClick.bind(this)}/>
            <Castle title="BVRR Container" handleClick={this._handleClick.bind(this)}/>

            <Castle title="BVQA Container" warning='warning' handleClick={this._handleClick.bind(this)}/>
            <Castle title="BVSEO" handleClick={this._handleClick.bind(this)}/>
          </div>

          <MessageBox selected={this.state.activeTab} />

        </div>

        <div className="collection-features">
          <span className='collection-features-text'>Collection Features</span>
          <div className="display-features-castles">
            <div className="castle">
              <div className="castle-pic"></div>
              <div className="castle-text">Staging Container Page</div>
            </div>
            <div className="castle">
              <div className="castle-pic"></div>
              <div className="castle-text">Production Container Page</div>
            </div>
          </div>
          <div className="message-box">
            <div className="message-box-text">
              <span className='message-text'>http://www.clientsite.com/container</span>
            </div>
          </div>
        </div>

      </div>
    )
  }

  _handleClick(title) {
    console.log(`Clicked ${title}`);

    this.setState({
      activeTab: title
    });

  }
}

export default ResultsDisplay;
