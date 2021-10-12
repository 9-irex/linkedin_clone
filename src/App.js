import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Login from "./components/login.js";
import Header from "./components/header.js";
import Home from "./components/home.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home">
              <Header />
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
