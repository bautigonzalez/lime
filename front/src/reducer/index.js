import { combineReducers } from "redux";
import userReducer from "./User-Reducer";
import productsReducer from "./Products-Reducer";

export default combineReducers({
  products: productsReducer,
  user: userReducer
});