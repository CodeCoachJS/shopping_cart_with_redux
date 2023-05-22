import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
		cartOpen: false,
	},
	reducers: {
		addToCart: (state, action) => {
			// TODO
			// action.payload is the product object
		},

		removeFromCart: (state, action) => {
			// TODO
		},
		closeCart: (state) => {
			// TODO
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;
