import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';
import { ShoppingCart } from './components';

function App() {
	const [items, setItems] = useState([]);

	const addToCart = (product) => {
		setItems((items) => [...items, product]);
	};

	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</Router>
			<ShoppingCart addToCart={addToCart} items={items} />
		</div>
	);
}

export default App;
