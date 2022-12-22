import { combineReducers } from "redux";
import cart from "./shopping.ducks";

const rootReducer = combineReducers({
  cart,
});

export default rootReducer;
