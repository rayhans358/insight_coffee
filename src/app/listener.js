// Import saveCart API
import { saveCart } from "./api/cart";

// Import Store
import store from "./store";

// initialize current of auth, cart & counter
let currentAuth;
let currentCart;
let currentCounter;

const listener = () => {
  // First, the value of previous state is current state
  let previousAuth = currentAuth;
  let previousCart = currentCart;
  let previousCounter = currentCounter;

  // The current state has value of global state
  currentAuth = store.getState().auth;
  currentCart = store.getState().cart;
  currentCounter = store.getState().counter;

  // Initialize Token
  const { token } = currentAuth;

  // If the auth of global state is not same as previous state
  if (currentAuth !== previousAuth) {
    localStorage.setItem("auth", JSON.stringify(currentAuth))
    saveCart(token, currentAuth)
  };

  // If the cart of global state is not same as previous cart
  if (currentCart !== previousCart) {
    localStorage.setItem("cart", JSON.stringify(currentCart))
    saveCart(token, currentCart)
  };

  // If the counter of global state is not same as previous counter
  if (currentCounter !== previousCounter) {
    localStorage.setItem("counter", JSON.stringify(currentCounter))
  };
};

export const listen = () => {
  store.subscribe(listener)
};