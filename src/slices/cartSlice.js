import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
		cartOpen: false,
	},
	reducers: {
		// actions
		addToCart: (state, action) => {
			state.cart.push(action.payload);
			state.cartOpen = true;
		},

		removeFromCart: (state, action) => {
			//TODO remove item from cart
		},

		// TODO close the cart
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
