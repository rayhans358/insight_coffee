// import dotenv from config
import { config } from "../../config";

// import get from reqmanager
import { get } from "./reqmanager";

export async function getProducts(params) {
  return await
    get(`${config.api_host}/api/products`, { params })
};