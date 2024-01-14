import {
  REGISTER_USER,
  ADD_IN_USERS,
  SWITCH_THEME,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER,
  UPDATE_IN_USERS,
} from "./types";

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

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});

export const addUserInUsers = (payload) => ({
  type: ADD_IN_USERS,
  payload,
});

export const updateUserInUsers = (payload) => ({
  type: UPDATE_IN_USERS,
  payload,
});
