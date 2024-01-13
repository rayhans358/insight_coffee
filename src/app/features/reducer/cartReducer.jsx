import * as constans from "../constans/cartConstans";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case constans.ADD_ITEM:
      if (state.find((item) => item._id === payload.item._id)) {
        return state.map((item) => ({
          ...item,
          qty: item._id === payload.item._id ? item.qty + 1 : item.qty
        }));
      } else {
        return [ ...state, { ...payload.item, qty: 1}];
      };
    
    case constans.REDUCE_ITEM:
      return state
        .map((item) => {
          if (item._id === payload.item._id) {
            return {
              ...item,
              qty: item.qty - 1 >= 0 ? item.qty - 1 : 0
            };
          }
          return item
        })
        .filter((item) => item.qty > 0);
    
    case constans.CLEAR_ITEM:
      return state
        .filter((item) => item._id !== payload.item._id);

    case constans.CLEAR_ALL_ITEM:
      return [];
    
    case constans.SET_ITEM:
      return payload.items;
  
    default:
      return state;
  };
};