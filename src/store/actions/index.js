import { REGISTER_USER, ADD_IN_USERS, SWITCH_THEME, LOGIN_USER } from "./types";

export const switchTheme = () => ({
  type: SWITCH_THEME,
});

export const registerUser = (payload) => ({
  type: REGISTER_USER,
  payload,
});

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const addUserInUsers = (payload) => ({
  type: ADD_IN_USERS,
  payload,
});
