import React, { useState } from 'react';
import { HomePage } from './pages';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { ShoppingCart } from './components';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [items, setItems] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const addToCart = (product) => {
		if (!isOpen) setIsOpen(true);
		setItems((items) => [...items, product]);
	};

	// TODO: add a landing page with a link to the `/shop`

	return (
		<div className='App'>
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
		</div>
	);
}

export default App;
