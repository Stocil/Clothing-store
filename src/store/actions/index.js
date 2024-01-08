import { ADD_USER, SWITCH_THEME } from "./types";

export const switchTheme = () => ({
  type: SWITCH_THEME,
});

export const addNewUser = (payload) => ({
  type: ADD_USER,
  payload,
});
