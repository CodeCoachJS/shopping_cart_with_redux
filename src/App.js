import React from 'react';
import { HomePage } from './pages';
import { ShoppingCart } from './components';

import store from './store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<ShoppingCart />
				<Router>
					<Routes>
						<Route path='/shop' element={<HomePage />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
