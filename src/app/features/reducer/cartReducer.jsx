// Import All Cart Constants Type
import * as constans from "../constans/cartConstans";

//  Initial State from Cart Reducer
// Similar to useState but globally state
// Initial State is also saved in Local Storage
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// Cart Reducer
export default function cartReducer(state = initialState, { type, payload }) {
  // If dispatch of action triggers
  // State will be changed to the new state
  switch (type) {
    case constans.ADD_ITEM:
      // If item from local storage already exists and the same item dispatches to reducer
      // Just increment the quantity
      if (state.find((item) => item._id === payload.item._id)) {
        return state.map((item) => ({
          ...item,
          qty: item._id === payload.item._id ? item.qty + 1 : item.qty
        }))
      } else {
        // If the same item dispatches to reducer but there's no item or different item in local storage
        // Add the dispatched item and the item quantity is 1
        return [ ...state, { ...payload.item, qty: 1}]
      }
    
    case constans.REMOVE_ITEM:
      // If item from local storage already exists and the same item dispatches to reducer
      // Just decrement the quantity
      return state
        .map((item) => ({
          ...item,
          qty: item._id === payload.item._id ? item.qty - 1 : item.qty
        }))
        // If item quantity is zero, the item will be removed
        .filter((item) => item.qty > 0)
    
    case constans.CLEAR_ITEM:
      return []
    
    case constans.SET_ITEM:
      return payload.items
  
    default:
      return state
  }
};