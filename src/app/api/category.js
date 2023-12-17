// import dotenv from config
import { config } from "../../config";

// Fetch API using axios
import axios from "axios";

export async function getCategories() {
  return await axios
    .get(`${config.api_host}/categories`)
};