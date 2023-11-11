import { applyMiddleware, combineReducers, compose, createStore } from "redux";

// Import all reducers from folder reducer
import authReducer from "./features/reducer/authReducer";
import counterReducer from "./features/reducer/counterReducer";
import productReducer from "./features/reducer/productReducer";
import cartReducer from "./features/reducer/cartReducer";
import thunk from "redux-thunk";

// All reducers will be combine and be saved in store
let rootReducers = combineReducers ({
  auth: authReducer,
  counter: counterReducer,
  product: productReducer,
  cart: cartReducer
})

// Integrate compose with redux devtools extension from browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Make Store
// Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises.
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;