import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import NavigationComponent from './navigation/NavigationComponent';
import LandingComponent from './landing/LandingComponent';
import SimpleRouteComponent from './simple-route/SimpleRouteComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationComponent />
          <LandingComponent />
          <SimpleRouteComponent />
        </div>
      </Router>
    );
  }
}

export default App;
