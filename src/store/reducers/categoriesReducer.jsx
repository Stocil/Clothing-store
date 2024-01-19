import {
  GET_CATEGORIES,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_SUCCESS,
} from "../actions/types";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES: {
      return { ...state, categories: [], loading: true, error: null };
    }

    case GET_CATEGORIES_SUCCESS: {
      const newCategories = action.payload.map((category) => {
        return category;
      });

      return {
        ...state,
        categories: newCategories,
        loading: false,
        error: null,
      };
    }

    case GET_CATEGORIES_ERROR: {
      return {
        ...state,
        categories: [],
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
