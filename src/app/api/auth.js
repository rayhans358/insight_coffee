import axios from "axios";
import { config } from "../../config";

export async function registerUser(data) {
	return await axios
    .post(`${config.api_host}/auth/register`, data);
};

export async function loginUser(data) {
	return await axios
    .post(`${config.api_host}/auth/login`, data);
};

export async function logoutUser() {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  
	return await axios
    .post(`${config.api_host}/auth/logout`, null, {
      headers: {
        authorization: `${token}`,
      }
    })
    .then((res) => {
      localStorage.removeItem('auth');
      return res
    });
};