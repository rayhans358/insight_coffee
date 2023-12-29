// import dotenv from config
import { config } from "../../config";

// Fetch API using axios
import axios from "axios";

export async function getProducts(params) {
  return await axios
    .get(`${config.api_host}/products`, { params })
};

export async function getProductsByCategory(categoryId) {
  return await axios
    .get(`${config.api_host}/products/category/${categoryId}`);
};

export async function getProductsByTag(tagId) {
  return await axios
    .get(`${config.api_host}/products/tag/${tagId}`);
};