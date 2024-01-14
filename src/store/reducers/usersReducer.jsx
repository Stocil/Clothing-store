import { ADD_IN_USERS, UPDATE_IN_USERS } from "../actions/types";

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

    case UPDATE_IN_USERS: {
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            name: action.payload.name,
            email: action.payload.email,
            avatarUrl: action.payload.avatarUrl,
          };
        }

        return user;
      });
    }

    default: {
      return state;
    }
  }
}
