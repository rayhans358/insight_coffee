// Import All counter Constants Type
import * as constans from "../constans/counterConstans";

let initialState = {
  cartCount: 0
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case constans.INC:
      return {
        ...state,
        cartCount: state.cartCount + action.cartCount
      }
    
    case constans.DEC:
      return {
        ...state,
        cartCount: state.cartCount - action.cartCount
      }

    case constans.SET_NULL:
      return {
        ...state,
        cartCount: 0
      }
  
    default:
      return state
  }
};