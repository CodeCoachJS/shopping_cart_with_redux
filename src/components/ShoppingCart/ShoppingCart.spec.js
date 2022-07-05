import ShoppingCart from './ShoppingCart';
import { screen } from '@testing-library/react';
import { renderWithStore } from '../../testHelpers';
import userEvent from '@testing-library/user-event';
import { removeFromCart } from '../../ducks/shopping.ducks';

describe('ShoppingCart', () => {
    it('displays the total price of an item', () => {
        // this component relies on the redux store being present with certain properties
        // we set the environment (scene) and can then test what we would expect in a 'real' scenario
        const fakeStore = {
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
        };

        renderWithStore(<ShoppingCart />, fakeStore);

        expect(screen.getByText('Total: $11.00')).toBeInTheDocument();
    });

    // HINT: you'll need your store to have at least 2 items in it and at least 1 should have a qty value > 1
    it('sums the total for multiple items with different quantities', () => {
        const fakeStore = {
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
                    2: {
                        id: 2,
                        title: 'Some Product 2',
                        price: 3,
                        description: 'For cool circles',
                        category: "circles's clothing",
                        image: 'https://fakestoreapi.com/img/2',
                        rating: {
                            rate: 4,
                            count: 5,
                        },
                        qty: 3,
                    },
                    3: {
                        id: 3,
                        title: 'Some Product 3',
                        price: 11,
                        description: 'For cool gals',
                        category: "gal's clothing",
                        image: 'https://fakestoreapi.com/img/3',
                        rating: {
                            rate: 4,
                            count: 5,
                        },
                        qty: 1,
                    },
                },
            },
        };

        renderWithStore(<ShoppingCart />, fakeStore);
        expect(screen.getByText('Total: $31.00')).toBeInTheDocument();
    });

    // hmmm... how would you test this? The disappearance of an item
    // OR that an action was called... like the `removeFromCart` action perhaps
    it('removes an item from the cart', () => {
        const fakeStore = {
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
                    2: {
                        id: 2,
                        title: 'Some Product 2',
                        price: 3,
                        description: 'For cool circles',
                        category: "circles's clothing",
                        image: 'https://fakestoreapi.com/img/2',
                        rating: {
                            rate: 4,
                            count: 5,
                        },
                        qty: 3,
                    },
                    3: {
                        id: 3,
                        title: 'Some Product 3',
                        price: 11,
                        description: 'For cool gals',
                        category: "gal's clothing",
                        image: 'https://fakestoreapi.com/img/3',
                        rating: {
                            rate: 4,
                            count: 5,
                        },
                        qty: 1,
                    },
                },
            },
        };

        // we simply inspect that dispatch gets called with the correct arguments
        // another test in the reducer logic can ensure the state gets updated correctly as well
        // with both these unit tests we can be (more) confident the removal logic is strong
        const dispatchStub = jest.fn();

        renderWithStore(<ShoppingCart />, fakeStore, dispatchStub);
        const removeItem1Btn = screen.getByTestId('remove-item3');

        userEvent.click(removeItem1Btn);

        expect(dispatchStub).toBeCalledWith(removeFromCart(3));
    });
});
