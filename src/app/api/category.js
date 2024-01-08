import axios from "axios";
import { config } from "../../config";

export async function getCategories() {
  return await axios
    .get(`${config.api_host}/categories`)
};