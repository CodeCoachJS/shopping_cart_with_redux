# Shopping Cart With Redux Tool Kit

## Basic Setup

Start by installing npm and cloning this repository into a working directory. Then run `npm install` from inside the project directory. This will build and install React, Redux etc into your local environment. Then run `npm run start` and navigate to `/shop` to launch the development server. You sould be in business!

`npm test` will run the test suite which should pass once you do all the `TODO`s in this app.

**PS - install Redux Chrome Devtools** https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

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

**Walkthrough of RTK Concepts:** https://www.loom.com/share/2257881c1e674014870b20afc2a38af3

**RTK challenge overview:** https://www.loom.com/share/a66896d036874e47a5b3a03c6eb73937

---

## TODO

---

Find all `TODO`s and add your code.

You'll know this app works as expected once all the tests pass by running `npm test`

You need to add actions for:

-   [ ] Adding an item from the cart (but no duplicate items)

-   [ ] Removing an item from the cart

-   [ ] Updating the quantity of an item - for example, adding the same item should increment the quantity of that item rather than adding it twice

-   [ ] Ya know, Redux is a bit overkill for this app... how could use the Context API to lift state and achieve the same capability? How would your tests change?

-   [ ] BONUS: Add some tests using `@testing-library`
