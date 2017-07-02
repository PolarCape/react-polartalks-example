import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavigationComponent from './navigation/NavigationComponent';
import LandingComponent from './landing/LandingComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationComponent />
        <LandingComponent />
      </div>
    );
  }
}

export default App;
