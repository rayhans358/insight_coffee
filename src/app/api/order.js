import axios from "axios";
import { config } from "../../config";

export async function getOrder() {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  
  return await axios
    .get(`${config.api_host}/orders`, {
      headers: {
        authorization: `${token}`,
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