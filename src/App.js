import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';
import { ShoppingCart } from './components';
import configureStore from './store/store';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </Router>
                <ShoppingCart />
            </Provider>
        </div>
    );
}

export default App;
