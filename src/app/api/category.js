// import dotenv from config
import { config } from "../../config";

// import get from reqmanager
import { get } from "./reqmanager";

export async function getCategories() {
  return await
    get(`${config.api_host}/api/categories`)
};