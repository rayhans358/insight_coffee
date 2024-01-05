import * as constans from "../constans/productConstans";

import debounce from "debounce-promise";

import { getProducts } from "../../api/product";

export const startFetchingProduct = () => ({
  type: constans.START_FETCHING_PRODUCT
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

export const toggleTags = (tag) => ({
  type: constans.TOGGLE_TAGS,
  payload: { tag }
})

let debounceFetchProduct = debounce(getProducts, 1000);

export default function fetchProduct() {
  return async (dispatch, getState) => {
    dispatch(startFetchingProduct());

    let state = getState().products || {};
    let { perPage, currentPage, category, keyword, tags } = state;

    const params = {
      limit: perPage || 10,
      skip: (currentPage || 1) * (perPage || 10) - (perPage || 10),
      category: category || '',
      name: keyword || '',
      tags: tags || []
    };

    try {
      let { data: { data, count }} = await debounceFetchProduct(params)
      dispatch(successFetchingProduct({ data,count }));

    } catch (error) {
      dispatch(errorFetchingProduct());
    }
  }
};