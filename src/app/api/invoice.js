// import dotenv from config
import { config } from "../../config";

// import get from reqmanager
import { get } from "./reqmanager";

export async function getInvoiceByOrderId(order_id) {
  // Fetching API with method GET with headers bearer token
  return await 
    get(`${config.api_host}/api/invoices/${order_id}`);
}
