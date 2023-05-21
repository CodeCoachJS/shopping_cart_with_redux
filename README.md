# Shopping Cart With Redux

## Basic Setup

Start by installing npm and cloning this repository into a working directory. Then run `npm install` from inside the project directory. This will build and install React, Redux etc into your local environment. Then run `npm run start` and navigate to `/shop` to launch the development server. You sould be in business!

## The Redux Toolkit Concept

Fear not, Redux Toolkit simplifies Redux. Under the hood, Redux leverages the observer or pub-sub design pattern https://www.dofactory.com/javascript/design-patterns/observer

Besides the boilerplate needed to set up Redux Toolkit in a react app, the underlying concepts are not overly complex:

`store`

The store holds the global state as well as subscriptions and events to listen for.

`slices`

In Redux Toolkit, the traditional roles of action creators and reducers are combined into 'slices'. A slice represents a piece of state and the functions that can update that state. Here's an example:

```js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: { isOpen: false, items: [] },
	reducers: {
		addToCart: (state, action) => {
			state.isOpen = true;
			state.items.push(action.payload);
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
```

In the example above, our slice handles an addToCart action and updates the state with the payload in a functional way (by directly mutating the state, which Redux Toolkit allows us to do safely thanks to the Immer library)

---

## Watch 📼:

---

**Walkthrough:** https://www.loom.com/share/e29215f4c7a545c29f5c26e5d06f7819

**Unit Tests with Redux:** https://www.loom.com/share/2e26762f8234400bb2183f60440906be

---

## TODO

---

You'll notice that the `ShoppingCart` has a button to remove items from the cart but there is no logic to handle that.

Ruh roh.

You need to add actions for:

-   [ ] Removing an item from the cart

-   [ ] Updating the quantity of an item - for example, adding the same item should increment the quantity of that item rather than adding it twice

-   [ ] Ya know, Redux is a bit overkill for this app... how could use the Context API to lift state and achieve the same capability? How would your tests change?

-   [ ] BONUS: Add some tests using `@testing-library`
