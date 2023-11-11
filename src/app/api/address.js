// import dotenv from config
import { config } from "../../config";

// import get and post from reqmanager
import { get, post } from "./reqmanager";

export async function getAddress(params) {
  // Fetching API with method GET with params limit & skip and with headers bearer token
  return await
    get(`${config.api_host}/api/delivery-address`, {
    params: {
      limit: params.limit,
      skip: params.page * params.limit - params.limit
  }})
};

export async function createAddress(payload) {
  // Fetching API with method POST with payload and with headers bearer token
  return await 
    post(`${config.api_host}/api/delivery-address`, payload)
};