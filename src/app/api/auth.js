// import dotenv from config
import { config } from "../../config";

// import post from reqmanager
import { post } from "./reqmanager";

export async function registerUser(data) {
  // Fetching API with method POST with headers bearer token
	return await 
    post(`${config.api_host}/auth/register`, data);
};

export async function loginUser(data) {
  // Fetching API with method POST with headers bearer token
	return await 
    post(`${config.api_host}/auth/login`, data);
};

export async function logoutUser() {
  // Fetching API with method POST with headers bearer token
	return await 
    post(`${config.api_host}/auth/logout`, null)
    // If success, remove token from local storage
    .then((res) => {
      localStorage.removeItem('auth');
      return res;
    });
};