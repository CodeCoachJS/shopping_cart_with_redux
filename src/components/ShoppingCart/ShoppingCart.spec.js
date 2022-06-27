import ShoppingCart from './ShoppingCart';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('ShoppingCart', () => {
    it('displays the total price of an item', () => {
        // this component relies on the redux store being present with certain properties
        // we set the environment (scene) and can then test what we would expect in a 'real' scenario

        // BONUS: how might you abstract this common scenario to be a helper function that other tests could use?
        const fakeStore = {
            dispatch: () => jest.fn(),
            subscribe: () => jest.fn(),
            getState: () => ({
                cart: {
                    isOpen: true,
                    items: {
                        1: {
                            id: 1,
                            title: 'Some Product',
                            price: 11,
                            description: 'For cool guys',
                            category: "men's clothing",
                            image: 'https://fakestoreapi.com/img/1',
                            rating: {
                                rate: 4,
                                count: 5,
                            },
                            qty: 1,
                        },
                    },
                },
            }),
        };

        render(
            <Provider store={fakeStore}>
                <ShoppingCart />
            </Provider>
        );

        expect(screen.getByText('Total: $11.00')).toBeInTheDocument();
    });

    // HINT: you'll need your store to have at least 2 items in it and at least 1 should have a qty value > 1
    it('sums the total for multiple items with different quantities', () => {});

    // hmmm... how would you test this? The disappearance of an item
    // OR that an action was called... like the `removeFromCart` action perhaps
    it('removes an item from the cart', () => {});
});
