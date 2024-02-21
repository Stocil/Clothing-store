import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UPDATE_USER,
  UPDATE_USER_BASKET,
  UPDATE_USER_FAVOURITE,
  UPDATE_USER_RECENT_PRODUCTS,
} from "../actions/types";

const initialState = JSON.parse(localStorage.getItem("currentUser")) || {};

export function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER: {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        avatarUrl: action.payload.avatarUrl,
        id: action.payload.id,
        recentProducts: [],
        basket: [],
        favourite: [],
      };
    }

    case LOGIN_USER: {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        avatarUrl: action.payload.avatarUrl,
        id: action.payload.id,
        recentProducts: action.payload.recentProducts,
        basket: action.payload.basket,
        favourite: action.payload.favourite,
      };
    }

    case LOGOUT_USER: {
      return {
        ...state,
        name: undefined,
        email: undefined,
        avatarUrl: undefined,
        id: undefined,
        recentProducts: undefined,
        basket: undefined,
        favourite: undefined,
      };
    }

    case UPDATE_USER: {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        avatarUrl: action.payload.avatarUrl,
      };
    }

    case UPDATE_USER_RECENT_PRODUCTS: {
      let newRecentProducts = state.recentProducts;

      if (state.recentProducts.includes(action.payload)) {
        newRecentProducts = newRecentProducts.filter(
          (product) => product !== action.payload
        );
      } else {
        newRecentProducts = state.recentProducts;
      }

      newRecentProducts.unshift(action.payload);

      return {
        ...state,
        recentProducts: [...newRecentProducts],
      };
    }

    case UPDATE_USER_BASKET: {
      return {
        ...state,
        basket: action.payload,
      };
    }

    case UPDATE_USER_FAVOURITE: {
      return {
        ...state,
        favourite: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
