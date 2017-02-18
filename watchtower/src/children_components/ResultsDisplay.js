import React, { Component } from 'react';
import './css/ResultsDisplay.css';

class ResultsDisplay extends Component {
  render() {
    return (
      <div className="results-display">
        <div className="display-features">
          <span className='display-features-text'>Display Features</span>
          <div className="display-features-castles">
            <div className="castle">
              <div className="castle-pic"></div>
              <div className="castle-text">BVAPI</div>
            </div>
            <div className="castle">
              <div className="castle-pic"></div>
              <div className="castle-text">BV Summary</div>
            </div>
            <div className="castle">
              <div className="castle-pic"></div>
              <div className="castle-text">BVRR Container</div>
            </div>
            <div className="castle">
              <div className="castle-pic-warning"></div>
              <div className="castle-text-warning">BVQA Container</div>
            </div>
            <div className="castle">
              <div className="castle-pic"></div>
              <div className="castle-text">BV SEO</div>
            </div>
          </div>

          <div className="message-box">
            <div className="message-box-text">
              <span className="warning-text">Warning: </span><span className='message-text'>BVQA Container not detected on this page.</span>
            </div>
          </div>

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
}

export default ResultsDisplay;
