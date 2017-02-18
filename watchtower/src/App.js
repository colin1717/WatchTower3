import React, { Component } from 'react';
import './App.css';
import Header from './children_components/Header';
import ResultsDisplay from './children_components/ResultsDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ResultsDisplay />  
      </div>
    );
  }
}

export default App;
