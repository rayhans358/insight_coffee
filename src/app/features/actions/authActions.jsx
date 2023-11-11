// Import All Auth Constants Type
import * as constans from "../constans/authConstans";

// Actions are process from dispatch (if there's event handler triggered) to reducer
export const userLogin = (payload) => ({
  type: constans.USER_LOGIN,
  payload
});

export const userLogout = () => ({
  type: constans.USER_LOGOUT
});