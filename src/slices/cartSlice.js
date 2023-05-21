import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
		cartOpen: false,
	},
	reducers: {
		addToCart: (state, action) => {
			// increment quantity for existing item
			const existingItem = state.cart.find(
				(item) => item.id === action.payload.id
			);

			if (existingItem) {
				existingItem.quantity++;
				return;
			}

			action.payload.quantity = 1;
			state.cart.push(action.payload);
			state.cartOpen = true;
		},

		removeFromCart: (state, action) => {
			state.cart = state.cart.filter(
				(item) => item.id !== action.payload
			);
		},
		closeCart: (state) => {
			state.cartOpen = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;
