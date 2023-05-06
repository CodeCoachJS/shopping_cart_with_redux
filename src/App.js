import React, { useState } from 'react';
import { HomePage } from './pages';
import { ShoppingCart } from './components';

function App() {
	const [items, setItems] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const addToCart = (product) => {
		if (!isOpen) setIsOpen(true);
		setItems((items) => [...items, product]);
	};

	// TODO: add routing and another page with a list of items from the cart

	return (
		<div className='App'>
			<HomePage addToCart={addToCart} />
			<ShoppingCart
				toggleCart={setIsOpen}
				items={items}
				isOpen={isOpen}
			/>
		</div>
	);
}

export default App;
