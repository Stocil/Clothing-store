import {
  REGISTER_USER,
  ADD_IN_USERS,
  SWITCH_THEME,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER,
  UPDATE_IN_USERS,
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_CATEGORY_PRODUCTS,
  GET_CATEGORY_PRODUCTS_SUCCESS,
  GET_CATEGORY_PRODUCTS_ERROR,
} from "./types";

export const switchTheme = () => ({
  type: SWITCH_THEME,
});

// currentUser

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

// users

export const addUserInUsers = (payload) => ({
  type: ADD_IN_USERS,
  payload,
});

export const updateUserInUsers = (payload) => ({
  type: UPDATE_IN_USERS,
  payload,
});

// async

export const getCategoriesData = () => ({
  type: GET_CATEGORIES,
});

export const getCategoriesDataSuccess = (payload) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload,
});

export const getCategoriesDataError = (payload) => ({
  type: GET_CATEGORIES_ERROR,
  payload,
});

export const getProductsData = () => ({
  type: GET_PRODUCTS,
});

export const getProductsDataSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsDataError = (payload) => ({
  type: GET_PRODUCTS_ERROR,
  payload,
});

export const getCategoryProductsData = () => ({
  type: GET_CATEGORY_PRODUCTS,
});

export const getCategoryProductsDataSuccess = (payload) => ({
  type: GET_CATEGORY_PRODUCTS_SUCCESS,
  payload,
});

export const getCategoryProductsDataError = (payload) => ({
  type: GET_CATEGORY_PRODUCTS_ERROR,
  payload,
});
