import axios from "axios";
import { config } from "../../config";

export async function getAddress() {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  
  return await axios
    .get(`${config.api_host}/delivery-address`, {
    headers: {
      Authorization: `${token}`
    }
  });
};

export async function getAddressById(addressId) {
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  return await axios.get(`${config.api_host}/delivery-address/${addressId}`, {
    headers: {
      Authorization: `${token}`
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
        Authorization: `${token}`
      }
    })
};