// Import All Product Constants Type
import * as constans from "../constans/productConstans";

// Import debounce to give delay of fetching product
import debounce from "debounce-promise";

// Import Fetch API to get all products
import { getProducts } from "../../api/product";

// Export all actions
export const startFetchingProduct = () => ({
  type: constans.ERROR_FETCHING_PRODUCT
});

export const errorFetchingProduct = () => ({
  type: constans.ERROR_FETCHING_PRODUCT
});

export const successFetchingProduct = (payload) => ({
  type: constans.SUCCESS_FETCHING_PRODUCT,
  payload
});

export const setPage = (number = 1) => ({
  type: constans.SET_PAGE,
  payload: { currentPage: number }
});

export const goToNextPage = () => ({
  type: constans.NEXT_PAGE
});

export const goToPrevPage = () => ({
  type: constans.PREV_PAGE
});

export const setCategory = (category) => ({
  type: constans.SET_CATEGORY,
  payload: { category }
});

export const setKeyword = (keyword) => ({
  type: constans.SET_KEYWORD,
  payload: { keyword: keyword }
});

export const setTags = (tags) => ({
  type: constans.SET_TAGS,
  payload: { tags }
});

export const toogleTags = (tag) => ({
  type: constans.TOGGLE_TAGS,
  payload: { tag }
})

// Give delay or debouncing from fetching product 1 second
let debounceFetchProduct = debounce(getProducts, 1000);

export const fetchProduct = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingProduct());// trigger begin of fetching product

    // Initializing parameter
    let perPage = getState().products.perPage || 10;
    let currentPage = getState().products.currentPage || 1;
    let category = getState().products.category || '';
    let keyword = getState().products.keyword || '';
    let tags = getState().products.tags || [];

    const params = {
      limit: perPage,
      skip: ( currentPage * perPage ) - perPage,
      category,
      name: keyword,
      tags
    };

    try {
      let { data: { data, count }} = await debounceFetchProduct(params)

      dispatch(successFetchingProduct({ data,count }));

    } catch (error) {
      dispatch(errorFetchingProduct());
    }
  }
};