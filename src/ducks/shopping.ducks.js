// ACTIONS
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const TOGGLE_CART = "TOGGLE_CART";

// ACTION CREATORS
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item, //product
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

// REDUCERS (subscribers)
const addToCartReducer = (state = { isOpen: false, items: [] }, action) => {
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
        items: [...state.items, payload],
      };

    default:
      return state;
  }
};

export default addToCartReducer;
