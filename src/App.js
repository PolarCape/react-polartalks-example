import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Guard from './Guard';

import NavigationComponent from './navigation/NavigationComponent';
import LandingComponent from './landing/LandingComponent';
import SimpleRouteComponent from './simple-route/SimpleRouteComponent';
import RouteWithParamComponent from './route-with-param/RouteWithParamComponent';
import GuardedRouteComponent from './guarded-route/GuardedRouteComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationComponent />

          <Route exact path="/" component={LandingComponent} />
          <Route path="/simple-route" component={SimpleRouteComponent} />
          <Route path="/route-with-param/:someText" component={RouteWithParamComponent} />
          <Route path="/guarded-route" component={Guard()(GuardedRouteComponent)} />
        </div>
      </Router>
    );
  }
}

export default App;
