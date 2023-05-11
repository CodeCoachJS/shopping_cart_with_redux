import React, { useState } from 'react';
import { HomePage } from './pages';
import { ShoppingCart } from './components';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [items, setItems] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const addToCart = (product) => {
		if (!isOpen) setIsOpen(true);
		setItems((items) => [...items, product]);
	};

	return (
		<div className='App'>
			<ShoppingCart
				toggleCart={setIsOpen}
				items={items}
				isOpen={isOpen}
			/>
			<Router>
				<Routes>
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
