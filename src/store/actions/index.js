import { ADD_CURRENT_USER, ADD_IN_USERS, SWITCH_THEME } from "./types";

export const switchTheme = () => ({
  type: SWITCH_THEME,
});

export const addCurrentUser = (payload) => ({
  type: ADD_CURRENT_USER,
  payload,
});

export const addUserInUsers = (payload) => ({
  type: ADD_IN_USERS,
  payload,
});
