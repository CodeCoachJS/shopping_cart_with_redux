import { combineReducers } from 'redux';
import shoppingDucks from './shoppingDucks';

const rootReducer = combineReducers({
    cart: shoppingDucks,
});

export default rootReducer;
