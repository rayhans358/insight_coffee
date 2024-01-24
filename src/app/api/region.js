import axios from "axios";
import { config } from "../../config";

export async function getProvince() {
  return await axios
    .get(`${config.api_host}/regions/provinces`)
};

export async function getRegency(code) {
  return await axios
    .get(`${config.api_host}/regions/regences`, {
      params: {
        code: code
      }
    })
};

export async function getDistricts(code) {
  return await axios
    .get(`${config.api_host}/regions/districts`,{
      params: {
        code: code
      }
    })
};

export async function getVillages(code) {
  return await axios
    .get(`${config.api_host}/regions/villages`,{
      params: {
        code: code
      }
    })
};