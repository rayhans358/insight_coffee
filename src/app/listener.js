import { saveCart } from "./api/cart";

import store from "./store";

let currentAuth;
let currentCart;
let currentCounter;

const listener = () => {
  let previousAuth = currentAuth;
  let previousCart = currentCart;
  let previousCounter = currentCounter;

  currentAuth = store.getState().auth;
  currentCart = store.getState().cart;
  currentCounter = store.getState().counter;

  const { token } = currentAuth;

  if (currentAuth !== previousAuth) {
    localStorage.setItem("auth", JSON.stringify(currentAuth))
    saveCart(token, currentAuth)
  };

  if (currentCart !== previousCart) {
    localStorage.setItem("cart", JSON.stringify(currentCart))
    saveCart(token, currentCart)
  };

  if (currentCounter !== previousCounter) {
    localStorage.setItem("counter", JSON.stringify(currentCounter))
  };
};

export const listen = () => {
  store.subscribe(listener)
};