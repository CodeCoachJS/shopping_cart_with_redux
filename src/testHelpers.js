import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

// what are some other helpers we might need?
// you may see how we could use helpers for other providers as well
// for example if our components relied on a theme provider from material ui
export const renderWithStore = (
    component,
    storeState,
    dispatch = jest.fn(),
    subscribe = jest.fn()
) => {
    const baseStoreObject = {
        dispatch,
        subscribe,
        getState: () => ({
            ...storeState,
        }),
    };

    render(<Provider store={baseStoreObject}>{component}</Provider>);
};
