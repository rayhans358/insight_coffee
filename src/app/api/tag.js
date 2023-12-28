// import dotenv from config
import { config } from "../../config";

// Fetch API using axios
import axios from "axios";

export async function getTags() {
  return await axios
    .get(`${config.api_host}/tags`)
};