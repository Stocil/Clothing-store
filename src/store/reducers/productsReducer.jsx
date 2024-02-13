import {
  GET_CATEGORY_PRODUCTS,
  GET_CATEGORY_PRODUCTS_ERROR,
  GET_CATEGORY_PRODUCTS_SUCCESS,
  GET_ONE_PRODUCT,
  GET_ONE_PRODUCT_ERROR,
  GET_ONE_PRODUCT_SUCCESS,
  GET_PART_OF_PRODUCTS,
  GET_PART_OF_PRODUCTS_ERROR,
  GET_PART_OF_PRODUCTS_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../actions/types";

const initialState = {
  products: [],
  loading: false,
  partLoading: false,
  error: null,
  partError: false,
  oneProduct: {},
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

    // Category product

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

    // Single product

    case GET_ONE_PRODUCT: {
      return { ...state, oneProduct: {}, loading: true, error: null };
    }

    case GET_ONE_PRODUCT_SUCCESS: {
      return {
        ...state,
        oneProduct: action.payload,
        loading: false,
        error: null,
      };
    }

    case GET_ONE_PRODUCT_ERROR: {
      return {
        ...state,
        oneProduct: {},
        loading: false,
        error: action.payload,
      };
    }

    // Pagination

    case GET_PART_OF_PRODUCTS: {
      return {
        ...state,
        partLoading: true,
        partError: false,
      };
    }

    case GET_PART_OF_PRODUCTS_SUCCESS: {
      const newProducts = action.payload.map((product) => product);

      return {
        ...state,
        products: [...state.products, ...newProducts],
        partLoading: false,
      };
    }

    case GET_PART_OF_PRODUCTS_ERROR: {
      return {
        ...state,
        partLoading: false,
        partError: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
