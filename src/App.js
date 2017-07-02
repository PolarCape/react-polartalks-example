import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import NavigationComponent from './navigation/NavigationComponent';
import LandingComponent from './landing/LandingComponent';
import LocalStateManagement from './local-state-management/LocalStateManagementComponent';
import CounterComponent from './counter/CounterComponent';
import ResultsComponent from './results/ResultsComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationComponent />

          <Route exact path="/" component={LandingComponent} />
          <Route path="/local" component={LocalStateManagement} />
          <Route path="/counter" component={CounterComponent} />
          <Route path="/results" component={ResultsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
