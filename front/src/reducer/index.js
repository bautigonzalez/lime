import { combineReducers } from "redux";
import userReducer from "./User-Reducer";
import productsReducer from "./Products-Reducer";
import cartReducer from "./Cart-Reducer"
import navbarReducer from './Navbar-Reducer'
import reviewsReducer from "./Reviews-Reducer";

export default combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
  navbar: navbarReducer,
  reviews: reviewsReducer
});