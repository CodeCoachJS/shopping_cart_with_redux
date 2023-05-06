import React, { useState } from 'react';
import { HomePage } from './pages';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { ShoppingCart } from './components';

import store from './store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	// TODO: remove all state from App.js
	const [items, setItems] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const addToCart = (product) => {
		if (!isOpen) setIsOpen(true);
		setItems((items) => [...items, product]);
	};
	// TODO: remove all state from App.js

	return (
		<div className='App'>
			<Provider store={store}>
				<ShoppingCart
					toggleCart={setIsOpen}
					items={items}
					isOpen={isOpen}
				/>
				<Router>
					<Routes>
						<Route path='/' element={<LandingPage />} />
						<Route
							path='/shop'
							element={<HomePage addToCart={addToCart} />}
						/>
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
