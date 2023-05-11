import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

// big store that is in the browswer redux dev tools
export default configureStore({
	reducer: {
		cart: cartReducer,
	},
});
