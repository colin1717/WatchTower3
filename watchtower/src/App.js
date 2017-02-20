import React, { Component } from 'react';
import './App.css';
import Header from './children_components/Header';
import ResultsDisplay from './children_components/ResultsDisplay';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div>
        <Header fetchData={this._fetchData.bind(this)}/>
        <ResultsDisplay />
      </div>
    );
  }

  _fetchData(clientName, PDPUrl) {
    console.log(`=====App.js fetchData======`);
    console.log(`GET URL: %c http://127.0.0.1:8000/clients/${clientName}/${PDPUrl}`, 'color: #ff0000');

    $.ajax({
      method: "GET",
      url: `http://127.0.0.1:8000/clients/${clientName}/${PDPUrl}`,
      success: ((data) => { console.log(data) })
    })
  }
}

export default App;
