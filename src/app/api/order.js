// import dotenv from config
import { config } from "../../config";

// import get and post from reqmanager
import { get, post } from "./reqmanager";

export async function getOrder(params) {
  // Fetching API with method GET with headers bearer token
  return await 
    get(`${config.api_host}/api/orders`, {
      params: {
        limit: params.limit,
        skip: params.page * params.limit - params.limit
      }
    })
};

export async function createOrder(payload) {
  return await
    post(`${config.api_host}/api/orders`, payload)
}