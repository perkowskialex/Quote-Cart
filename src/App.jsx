import React, { Component } from 'react'
import logo from './logo.svg'
import Button from './components/Button'
import './App.css'
import { store, cart } from './data'
import Store from './views/Store'

class App extends Component {
	state = {
		storeData: [],
		cartData: []
	}

	componentDidMount() {
		this.setState({
			storeData: store,
			cartData: cart
		})
	}

	render() {
		return (
			<div className="App">
				<Store store={this.state.storeData} />
			</div>
		)
	}
}

export default App
