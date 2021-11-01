import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/home/LandingPage";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <switch>
            <Route exact path={"/"} component={LandingPage} />
          </switch>
        </Router>
      </div>
    );
  }
}
