import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import authReducer from "./features/reducer/authReducer";
import counterReducer from "./features/reducer/counterReducer";
import productReducer from "./features/reducer/productReducer";
import cartReducer from "./features/reducer/cartReducer";
import thunk from "redux-thunk";

let rootReducers = combineReducers ({
  auth: authReducer,
  counter: counterReducer,
  product: productReducer,
  cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;