// Import All Cart Constants Type
import * as constans from "../constans/cartConstans";

// Actions are process from dispatch (if there's event handler triggered) to reducer
export function addItem(item) {
  return {
    type: constans.ADD_ITEM,
    payload: {
      item: {
        ...item,
        qty: 1
      }
    }
  }
};

export function reduceItem(item) {
  return {
    type: constans.REDUCE_ITEM,
    payload: { item: item }
  }
};

export function clearItem(item) {
  return {
    type: constans.CLEAR_ITEM,
    payload: { item: item }
  }
};

export function clearAllItem() {
  return {
    type: constans.CLEAR_ALL_ITEM
  }
};

export function setItems(items) {
  return {
    type: constans.SET_ITEM,
    payload: { items }
  }
};