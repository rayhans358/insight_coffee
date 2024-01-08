import axios from "axios";
import { config } from "../../config";

export async function getTags() {
  return await axios
    .get(`${config.api_host}/tags`)
};