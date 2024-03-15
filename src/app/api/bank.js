import axios from "axios";
import { config } from "../../config";

export async function getBanks() {
  return await axios
    .get(`${config.api_host}/banks`)
};

export async function getMiniMarkets() {
  return await axios
    .get(`${config.api_host}/mini-markets`)
}