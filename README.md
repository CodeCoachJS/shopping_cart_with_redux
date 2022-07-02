# Shopping Cart With Redux

Stop being afraid of redux. Under the hood, redux leverages the observer or pub-sub design pattern https://www.dofactory.com/javascript/design-patterns/observer

Besides the boiler plate needed to set up redux in a react app, the underlying concepts are not overly complex:

`store`

The `store` holds the global state as well as subscriptions and events to listen for.

`actions`

Actions are emitted or published by action creators. They often look like this:

```js
export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART', // the event
        payload: item, // the payload
    };
};
```

`reducers`

Reducers handle actions and use the payload to update the global state in the `store`. Redux strongly emphasizes using functional programming patterns and to avoid mutation of the global state. Here's a common reducer example:

```js
const addToCartReducer = (state = { isOpen: false, items: [] }, action) => {
    const { payload, type } = action;
    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                isOpen: true,
                items: [...state.items, payload],
            };

        default:
            return state;
    }
};
```

In the example above, our reducer listens for an `ADD_TO_CART` event and updates the state with the payload in a functional way (by making a copy of the original state and updating that copy rather than the original)

---

## Ducks Pattern

---

In other tutorials, you may see `actions`, `action creators` and `reducers` living in separate files. This is confusing to me. This app leverages the `ducks` patterns. If it walks and talks like a duck...

Bascially, all actions/reducers/action creators live in the same file which relate to particular functionality. For example `shopping.ducks.js` has all the logic for manipulating the state for our shopping cart.

https://github.com/erikras/ducks-modular-redux

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
