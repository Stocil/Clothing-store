import {
  INCREASE_SCORE,
  DECREASE_SCORE,
  ADD_NEW_USER,
  CHANGE_USER_DATA,
  DELETE_USER,
} from "./types";

export const increaseScore = (payload) => ({
  type: INCREASE_SCORE,
  payload,
});

export const decreaseScore = (payload) => ({
  type: DECREASE_SCORE,
  payload,
});

export const addNewUser = (payload) => ({
  type: ADD_NEW_USER,
  payload,
});

export const changeUserData = (payload) => ({
  type: CHANGE_USER_DATA,
  payload,
});

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});
