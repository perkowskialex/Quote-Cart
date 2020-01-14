import React, { Component } from "react";
import Button from "./components/Button";
import PropTypes from "prop-types";
import { store, cart } from "./data";
import Store from "./views/Store";

import logo from "./logo.svg";
import "./App.css";

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
      <div className="App">
        <Store store={this.state.storeData} />
      </div>
    );
  }
}

export default App;
