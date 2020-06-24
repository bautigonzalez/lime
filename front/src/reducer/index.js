import { combineReducers } from "redux";
import loginReducer from "./Login-Reducer";
import productsReducer from "./Products-Reducer";

export default combineReducers({
  products: productsReducer,
  login: loginReducer
});