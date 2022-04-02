import { createStore } from 'redux';
import rootReducer from '../ducks';

const configureStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../ducks', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};

export default configureStore;
