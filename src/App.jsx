import React, { Component } from "react";
import logo from "./logo.svg";
import Button from "./components/Button";
import "./App.css";
import { store, cart } from "./data";
import Store from "./views/Store";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    storeData: [],
    cartData: []
  };

  componentDidMount() {
    this.setState({
      storeData: store,
      cartData: cart
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Nav />
                <Store store={this.state.storeData} />
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
