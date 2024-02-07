import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UPDATE_USER,
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
        recentProducts: action.payload.recentProducts,
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
      return {
        ...state,
        recentProducts: [...state.recentProducts, action.payload],
      };
    }

    default: {
      return state;
    }
  }
}
