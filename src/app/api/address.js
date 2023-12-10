// Fetch API using axios
import axios, { Axios } from "axios";

// import dotenv from config
import { config } from "../../config";

export async function getAddress(params) {
  // Get token from local storage
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  
  // Fetching API with method GET with params limit & skip and with headers bearer token
  return await Axios
    .get(`${config.api_host}/api/delivery-address`, {
    params: {
      limit: params.limit,
      skip: params.page * params.limit - params.limit},
    headers: {
        authorization: `Bearer ${token}`
    }
  })
};

export async function createAddress(payload) {
  // Get token from local storage 
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  
  // Fetching API with method POST with payload and with headers bearer token
  return await axios
    .post(`${config.api_host}/api/delivery-address`, payload, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
};

export async function getLocation(tingkat, kodeInduk) {
  return await axios
    .get(`https://insight-coffee-be.vercel.app/api/${tingkat}?kode_induk=${kodeInduk}`)
};