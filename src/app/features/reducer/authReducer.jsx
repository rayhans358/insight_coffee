import * as constans from "../constans/authConstans";

const initialState = localStorage.getItem("auth") 
  ? JSON.parse(localStorage.getItem("auth")) 
  : { user: null, token: null };

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case constans.USER_LOGIN:
      return { user: payload.user, token: payload.token }
    case constans.USER_LOGOUT:
      return { user: null, token: null }
    default:
      return state
  }
};