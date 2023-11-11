// import dotenv from config
import { config } from "../../config";

// import put from reqmanager
import { put } from "./reqmanager";

// import action setItems from cart
import { setItems } from "../Features/Cart/actions";

// import store
import store from "../store";

// Fetch API using axios
import axios from "axios";

export async function saveCart(token, cart) {
  // Fetching API with method PUT with headers bearer token
  return await 
    put(`${config.api_host}/api/carts`, {items: cart})
}

export async function getCart() {
  // Get token from local storage 
  const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  if (!token) return;

  // Fetching API with method GET with headers bearer token and get data
  const { data } = await axios
    .get(`${config.api_host}/api/carts/`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

  // If fetching success
  if (!data.error) {
    store.dispatch(setItems(data));
    localStorage.setItem("cart", JSON.stringify(data));
  }
};