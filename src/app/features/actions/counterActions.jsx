// Import All counter Constants Type
import * as constans from "../constans/counterConstans";

export function increment(value) {
  return {
    type: constans.INC,
    cartCount: value
  }
};

export function decrement(value) {
  return {
    type: constans.DEC,
    cartCount: value
  }
};

export function set_null(value) {
  return {
    type: constans.SET_NULL,
    cartCount: value
  }
};

export const decrementCheck = (value) => {
  return (dispatch, getState) => {
    if (getState().counter.cartCount > 0) {
      dispatch(decrement(value))
    }
  }
};