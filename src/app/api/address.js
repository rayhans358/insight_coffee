import axios from "axios";
import { config } from "../../config";

export async function getAddress() {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  
  return await axios
    .get(`${config.api_host}/delivery-address`, {
    headers: {
      authorization: `${token}`
    }
  });
};

export async function getAddressById(addressId) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}/delivery-address/${addressId}`, {
    headers: {
      authorization: `${token}`
    }
  });
};

export async function createAddress(payload) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios
    .post(`${config.api_host}/delivery-address`, payload, {
      headers: {
        authorization: `${token}`
      }
    })
};