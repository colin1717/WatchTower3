import React, { Component } from 'react';
import './App.css';
import Header from './children_components/Header';
import ResultsDisplay from './children_components/ResultsDisplay';
import LoadingAnimation from './children_components/LoadingAnimation';
import $ from 'jquery';
import * as sortData from './sortData';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
      loading: false
    }
  }

  render() {
    let showData;
    if ($.isEmptyObject(this.state.data) === false) {
      showData = <ResultsDisplay data={this.state.data}/>;
    } else if (this.state.loading){
      showData = <div className="results-display"><LoadingAnimation/></div>
    } else {
      showData = <div className="results-display" />
    }

    return (
      <div>
        <Header fetchData={this._fetchData.bind(this)} showLoadingAnimation={this._showLoadingAnimation.bind(this)} />
        {showData}
      </div>
    );
  }

  _fetchData(clientName, PDPUrl) {
    console.log(`=====App.js fetchData======`);
    console.log(`GET URL: %c http://127.0.0.1:8000/clients/${clientName}/${PDPUrl}`, 'color: #ff0000');

    $.ajax({
      method: "GET",
      url: `http://127.0.0.1:8000/clients/${clientName}/${PDPUrl}`,
      success: ((data) => { this._saveDataToState(sortData.sortData(data)) })
    })
  }

  _saveDataToState(data){
    this.setState({
      data: data,
      loading: false
    });
  }

  _showLoadingAnimation(){
    this.setState({
      loading: true
    })
  }

}

export default App;
