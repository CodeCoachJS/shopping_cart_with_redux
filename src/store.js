import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

// big store object that is in the browswer redux dev tools
export default configureStore({
	reducer: {
		cart: cartReducer,
	},
});
