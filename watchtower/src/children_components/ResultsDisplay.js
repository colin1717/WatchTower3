import React, { Component } from 'react';
import './css/ResultsDisplay.css';
import Castle from './Castle';
import MessageBox from './MessageBox';

class ResultsDisplay extends Component {
  constructor() {
    super();

    this.state = {
      activeDisplayFeaturesTab: 'BVAPI',
      activeCollectionFeaturesTab: 'Production Container Page'
    }
  }

  render() {
    return (
      <div className="results-display">
        <div className="display-features">
          <span className='display-features-text'>Display Features</span>
          <div className="display-features-castles">
            <Castle title="BVAPI" handleClick={this._handleClickDisplayFeatures.bind(this)}/>
            <Castle title="BVRRSummary" handleClick={this._handleClickDisplayFeatures.bind(this)}/>
            <Castle title="BVRR Container" handleClick={this._handleClickDisplayFeatures.bind(this)}/>

            <Castle title="BVQA Container" warning='warning' handleClick={this._handleClickDisplayFeatures.bind(this)}/>
            <Castle title="BVSEO" handleClick={this._handleClickDisplayFeatures.bind(this)}/>
          </div>

          <MessageBox selected={this.state.activeDisplayFeaturesTab} />

        </div>

        <div className="collection-features">
          <span className='collection-features-text'>Collection Features</span>
          <div className="display-features-castles">

            <Castle title="Staging Container Page" handleClick={this._handleClickCollectionFeatures.bind(this)} />
            <Castle title="Production Container Page" handleClick={this._handleClickCollectionFeatures.bind(this)} />
          </div>

          <MessageBox selected={this.state.activeCollectionFeaturesTab} />
        </div>

      </div>
    )
  }

  _handleClickDisplayFeatures(title) {
    console.log(`Clicked ${title}`);

    this.setState({
      activeDisplayFeaturesTab: title
    });
  }

  _handleClickCollectionFeatures(title) {
    console.log(`Clicked ${title}`);

    this.setState({
      activeCollectionFeaturesTab: title
    });
  }
}

export default ResultsDisplay;
