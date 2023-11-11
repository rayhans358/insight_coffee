// Import All Product Constants Type
import * as constans from "../constans/productConstans";

const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error'
};

//  Initial State from Product Reducer
// Similar to useState but globally state
const initialState = {
  data: [],
  currentPage: 1,
  totalItems: -1,
  perPage: 10,
  keyword: '',
  category: '',
  tags: [],
  status: statusList.idle
};

// Product Reducer
export default function productReducer (state = initialState, { type, payload }) {
  switch (type) {
    case constans.START_FETCHING_PRODUCT:
      return {
        ...state,
        status: statusList.process
      }
    
    case constans.ERROR_FETCHING_PRODUCT:
      return {
        ...state,
        status: statusList.error
      }

    case constans.SUCCESS_FETCHING_PRODUCT:
      return {
        ...state,
        status: statusList.success,
        data: payload.data,
        totalItems: payload.count
      }
    
    case constans.SET_PAGE:
      return {
        ...state,
        currentPage: payload.currentPage
      }
    
    case constans.NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1
      }

    case constans.PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1
      }

    case constans.SET_CATEGORY:
      return {
        ...state,
        currentPage: 1,
        category: payload.category,
        keyword: '',
        tags: []
      }

    case constans.SET_KEYWORD:
      return {
        ...state,
        keyword: payload.keyword
      }

    case constans.SET_TAGS:
      return {
        ...state,
        tags: payload.tags
      }

    case constans.TOGGLE_TAGS:
      return !state.tags.includes(payload.tag)
        ? { 
          ...state, 
          currentPage: 1, 
          tags: [...state.tags, 
            payload.tag] 
        }
        : {
          ...state,
          currentPage: 1,
          tags: state.tags.filter((tag) => tag !== payload.tag)
        }
  
    default:
      return state
  }
};