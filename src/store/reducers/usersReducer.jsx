import { ADD_IN_USERS } from "../actions/types";

const initialState = JSON.parse(localStorage.getItem("users")) || [];

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_IN_USERS: {
      const newUsers = [
        ...state,
        {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          avatarUrl: action.payload.avatarUrl,
          id: action.payload.id,
        },
      ];

      return newUsers;
    }
    default: {
      return state;
    }
  }
}
