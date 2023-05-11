import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
		cartOpen: false,
	},
	reducers: {
		addToCart: (state, action) => {
			state.cart.push(action.payload);
			state.cartOpen = true;
		},

		removeFromCart: (state, action) => {
			state.cart = state.cart.filter(
				(item) => item.id !== action.payload
			);
			console.log(state.cart);
		},
		closeCart: (state) => {
			state.cartOpen = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;
