// ACTIONS
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const TOGGLE_CART = 'TOGGLE_CART';

// ACTION CREATORS
export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    };
};

export const toggleCart = (shouldOpen) => {
    return {
        type: TOGGLE_CART,
        payload: shouldOpen,
    };
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    };
};

/**
 * _removeItemByKey
 * @param {string} key
 * @param {object} obj
 * @returns a copy of the original object with the key removed
 */

const _removeItemByKey = (key, obj) => {
    const copy = { ...obj };
    delete copy[key];
    return { ...copy };
};

// REDUCERS
const addToCartReducer = (state = { isOpen: false, items: {} }, action) => {
    const { payload, type } = action;
    switch (type) {
        case TOGGLE_CART:
            return {
                ...state,
                isOpen: payload,
            };
        case ADD_TO_CART:
            return {
                ...state,
                isOpen: true,
                items: state.items[payload.id]
                    ? {
                          ...state.items,
                          [payload.id]: {
                              ...payload,
                              qty: (state.items[payload.id].qty += 1),
                          },
                      }
                    : {
                          ...state.items,
                          [payload.id]: {
                              ...payload,
                              qty: 1,
                          },
                      },
            };
        case REMOVE_FROM_CART: {
            return {
                ...state,
                items: _removeItemByKey(payload, state.items),
            };
        }

        default:
            return state;
    }
};

export default addToCartReducer;
