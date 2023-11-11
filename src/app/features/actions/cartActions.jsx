// Import All Cart Constants Type
import * as constans from "../constans/cartConstans";

// Actions are process from dispatch (if there's event handler triggered) to reducer
export function addItem(item) {
  return {
    type: constans.ADD_ITEM,
    payload: {
      item: {
        ...item,
        product: item.product || item
      }
    }
  }
};

export function removeItem(item) {
  return {
    type: constans.REMOVE_ITEM,
    payload: { item: item }
  }
};

export function clearItem() {
  return {
    type: constans.CLEAR_ITEM
  }
};

export function setItems(items) {
  return {
    type: constans.SET_ITEM,
    payload: { items }
  }
};