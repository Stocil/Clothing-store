import {
  GET_CATEGORY_PRODUCTS,
  GET_CATEGORY_PRODUCTS_ERROR,
  GET_CATEGORY_PRODUCTS_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../actions/types";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS: {
      return { ...state, products: [], loading: true, error: null };
    }

    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload.map((product) => product),
        loading: false,
        error: null,
      };
    }

    case GET_PRODUCTS_ERROR: {
      return { ...state, products: [], loading: false, error: action.payload };
    }

    case GET_CATEGORY_PRODUCTS: {
      return { ...state, products: [], loading: true, error: null };
    }

    case GET_CATEGORY_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload.map((product) => product),
        loading: false,
        error: null,
      };
    }

    case GET_CATEGORY_PRODUCTS_ERROR: {
      return { ...state, products: [], loading: false, error: action.payload };
    }

    default: {
      return state;
    }
  }
}
