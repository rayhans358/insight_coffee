// import dotenv from config
import { config } from "../../config";

// Fetch API using axios
import axios from "axios";

export async function getOrder(params) {
  // Get token from local storage
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  
  // Fetching API with method GET with headers bearer token
  return await axios
    .get(`${config.api_host}/api/orders`, {
      params: {
        limit: params.limit,
        skip: params.page * params.limit - params.limit
      },
      headers: {
        authorization: `Bearer ${token}`,
      }
    })
};

export async function createOrder(payload) {
  // Get token from local storage
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  
  // Fetching API with method POST with headers bearer token
  return await axios
    .post(`${config.api_host}/api/orders`, payload, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    })
};