import { LOGIN_USER, REGISTER_USER } from "../actions/types";

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
      };
    }
    case LOGIN_USER: {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        avatarUrl: action.payload.avatarUrl,
        id: action.payload.id,
      };
    }

    default: {
      return state;
    }
  }
}
