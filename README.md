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

## Watch 📼:

---

https://www.loom.com/share/e29215f4c7a545c29f5c26e5d06f7819

## TODO

---

You'll notice that the `ShoppingCart` has a button to remove items from the cart but there is no logic to handle that.

Ruh roh.

You need to add actions for:

-   [ ] Removing an item from the cart

-   [ ] Updating the quantity of an item - for example, adding the same item should increment the quantity of that item rather than adding it twice

-   [ ] BONUS: Add some tests using `@testing-library`
