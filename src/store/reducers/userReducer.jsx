import { ADD_USER } from "../actions/types";

const initialState = JSON.parse(localStorage.getItem("currentUser")) || {};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        avatarUrl: action.payload.avatarUrl,
      };
    }

    default: {
      return state;
    }
  }
}
