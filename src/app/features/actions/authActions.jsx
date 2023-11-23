// Import All Auth Constants Type
import * as constans from "../constans/authConstans";

// Actions are process from dispatch (if there's event handler triggered) to reducer
export function userLogin(payload) {
  return {
    type: constans.USER_LOGIN,
    payload
  }
};

export function userLogout() {
  return {
    type: constans.USER_LOGOUT
  }
};