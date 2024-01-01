// import dotenv from config
import { config } from "../../config";

// Fetch API using axios
import axios from "axios";

export async function getProducts(params) {
  return await axios
    .get(`${config.api_host}/products`, { params })
};

export async function getProductsCategoryTag(filter) {
  let endpoint = '';

  if (filter.category) {
    endpoint += `/products?category=${filter.category}`;
  } else if (filter.tag) {
    endpoint += `/products?tags=${filter.tag}`
  } else {
    throw new Error('Invalid filter');
  };

  try {
    const response = await axios.get(`${config.api_host}${endpoint}`);
    return response.data;
  } catch (err) {
    throw new Error('Error fetching filtered products')
  }
}
/*
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
*/