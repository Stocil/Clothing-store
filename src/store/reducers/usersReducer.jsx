import {
  ADD_IN_USERS,
  UPDATE_IN_USERS,
  UPDATE_USERS_RECENT_PRODUCTS,
} from "../actions/types";

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
          recentProducts: [],
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
            password: action.payload.password
              ? action.payload.password
              : user.password,
          };
        }

        return user;
      });
    }

    case UPDATE_USERS_RECENT_PRODUCTS: {
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            recentProducts: [...state.recentProducts, action.payload],
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
