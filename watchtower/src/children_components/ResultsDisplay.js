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
            <Castle title="BVAPI" warning={this.props.data["Javascript URL"].status ? 'null' : 'warning'} handleClick={this._handleClickDisplayFeatures.bind(this)}/>
            <Castle title="BVRRSummary" warning={this.props.data["BVRRSummary Container Has Content"] ? "null" : 'warning'} handleClick={this._handleClickDisplayFeatures.bind(this)}/>
            <Castle title="BVRR Container" warning={this.props.data["BVRR Container Has Content"] ? "null" : 'warning'} handleClick={this._handleClickDisplayFeatures.bind(this)}/>

            <Castle title="BVQA Container" warning={this.props.data["BVQA Container Has Content"] ? "null" : 'warning'} handleClick={this._handleClickDisplayFeatures.bind(this)}/>
            <Castle title="BVSEO" warning={this.props.data["SEO Content Loading"] ? "null" : 'warning'} handleClick={this._handleClickDisplayFeatures.bind(this)}/>
          </div>

          <MessageBox selected={this.state.activeDisplayFeaturesTab} />

        </div>

        <div className="collection-features">
          <span className='collection-features-text'>Collection Features</span>
          <div className="display-features-castles">

            <Castle title="Staging Container Page" warning={(this.props.data["Staging Container URL"].msg == 'BV Hosted') ? 'warning' : 'null'} handleClick={this._handleClickCollectionFeatures.bind(this)} />
            <Castle title="Production Container Page" warning={(this.props.data["Production Container URL"].msg == "BV Hosted") ? 'warning' : 'null'}  handleClick={this._handleClickCollectionFeatures.bind(this)} />
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
