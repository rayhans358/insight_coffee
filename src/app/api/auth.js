// Fetch API using axios
import axios, { Axios } from "axios";

// import dotenv from config
import { config } from "../../config";

export async function registerUser(data) {
  // Fetching API with method POST with headers bearer token
	return await Axios
    .post(`${config.api_host}/auth/register`, data);
};

export async function loginUser(data) {
  // Fetching API with method POST with headers bearer token
	return await axios
    .post(`${config.api_host}/auth/login`, data);
};

export async function logoutUser() {
  // Get token from local storage 
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  // Fetching API with method POST with headers bearer token
	return await axios
    .post(`${config.api_host}/auth/logout`, null, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    })
    // If success, remove token from local storage
    .then((res) => {
      localStorage.removeItem('auth');
      return res
    })
};