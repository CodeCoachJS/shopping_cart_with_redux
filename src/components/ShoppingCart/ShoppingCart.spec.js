import ShoppingCart from './ShoppingCart';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('ShoppingCart', () => {
	it('displays the total price of multiple items', () => {
		// this component relies on the redux store being present with certain properties
		// we set the environment (scene) and can then test what we would expect in a 'real' scenario

		// BONUS: how might you abstract this common scenario to be a helper function that other tests could use?
		const fakeStore = {
			dispatch: () => jest.fn(),
			subscribe: () => jest.fn(),
			getState: () => ({
				cart: {
					cartOpen: true,
					cart: [
						{
							id: 1,
							title: 'Pants',
							price: 12,
							image: 'https://www.image1.com',
						},
						{
							id: 2,
							title: 'Shorts',
							price: 11,
							image: 'https://www.image2.com',
						},
					],
				},
			}),
		};

		render(
			<Provider store={fakeStore}>
				<ShoppingCart />
			</Provider>
		);

		expect(screen.getByText('Total: $23.00')).toBeInTheDocument();
	});

	// hmmm... how would you test this? The disappearance of an item
	// OR that an action was called... like the `removeFromCart` action perhaps
	it('removes an item from the cart', () => {});
});
