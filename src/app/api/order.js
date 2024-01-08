import axios from "axios";
import { config } from "../../config";

export async function getOrder(params) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  
  return await axios
    .get(`${config.api_host}/orders`, {
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
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  
  return await axios
    .post(`${config.api_host}/orders`, payload, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    })
};