// import dotenv from config
import { config } from "../../config";

// Fetch API using axios
import axios from "axios";

export async function getInvoiceByOrderId(order_id) {
  // Get token from local storage
  let { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

  // Fetching API with method GET with headers bearer token
  return await axios
    .get(`${config.api_host}/api/invoices/${order_id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    })
};
