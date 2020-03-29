import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import BurgerMenu from './components/Menu/BurgerMenu';
import ColumnLogo from './column-logo.svg';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div id="outer-container">
					<BurgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
					<main id="page-wrap">
						<Navbar />
						<Switch>
							<Route exact path="/" component={ProductList} />
							<Route path="/details" component={Details} />
							<Route path="/cart" component={Cart} />
							<Route component={Default} />
						</Switch>
						<Modal />
					</main>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
