import axios from "axios";
import { config } from "../../config";

export async function getOrder() {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  
  return await axios
    .get(`${config.api_host}/orders`, {
      headers: {
        Authorization: `${token}`,
      }
    })
};

export async function createOrder(payload) {
  const authData = localStorage.getItem("auth")
   ? JSON.parse(localStorage.getItem("auth"))
   : {};
  const token = authData.token;
  console.log(token, 'Token');

  try {
    const response = await axios
      .post(`${config.api_host}/orders`, payload, {
        headers: {
          Authorization: `${token}`,
        }
      });
    return response.data;

  } catch (error) {
    throw error;
  };
};