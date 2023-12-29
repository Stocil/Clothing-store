import { ADD_NEW_USER, CHANGE_USER_DATA, DELETE_USER } from "../actions/types";

const initialState = [];

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_USER: {
      return [...state, action.payload];
    }

    case CHANGE_USER_DATA: {
      return state.filter((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }

        return user;
      });
    }

    case DELETE_USER: {
      return state.filter((user) => user.id !== action.payload);
    }

    default: {
      return state;
    }
  }
}
