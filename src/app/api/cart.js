import axios from "axios";
import { config } from "../../config";
import { setItems } from "../features/actions/cartActions";
import store from "../store";

export async function saveCart(token, cart) {
  return await axios
    .put(`${config.api_host}/carts`, {items: cart}, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    })
};

export async function getCart() {
  const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  if (!token) return;

  const { data } = await axios
    .get(`${config.api_host}/carts`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })

  if (!data.error) {
    store.dispatch(setItems(data));
    localStorage.setItem("cart", JSON.stringify(data));
  }
};