// Import All counter Constants Type
import * as constans from "../constans/counterConstans";

export const increment = (value) => {
  return {
    type: constans.INC,
    cartCount: value
  }
};

export const decrement = (value) => {
  return {
    type: constans.DEC,
    cartCount: value
  }
};

export const set_null = (value) => {
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