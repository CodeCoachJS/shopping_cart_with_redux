# React Testing with Redux

### Getting Started

```js
npm i (install dependencies)
npm start (start the app)
npm test (run tests)
```

---

This small e-commerce app uses redux to manage state. In order to write tests which rely on redux actions we must set the stage in our tests.

What is setting the stage?

Basically, we want to replicate the same environment that the component live in outside of the test.

In the case of a redux-connected component, we want to provide the same redux store interface and `Provider` component which our redux-connected components rely on.

We want the test environment to work as closely to the "real" environment as possible and it's often not possible to test a component in isolation. We wrap entire applications in different contexts and providers and as such, we need to add them to our tests as well.

https://www.loom.com/share/997ed8eae0b44a8e9e3d8e2ebb5b6b88

---

### Your Turn

Add some additional tests which rely on the redux store to `ShoppingCart.spec.js`
