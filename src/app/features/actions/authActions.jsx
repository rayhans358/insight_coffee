import * as constans from "../constans/authConstans";

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