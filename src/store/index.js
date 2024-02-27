import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { thunk } from "redux-thunk";

import { themeReducer } from "./reducers/themeReducer";
import { currentUserReducer } from "./reducers/currentUserReducer";
import { usersReducer } from "./reducers/usersReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  currentUser: currentUserReducer,
  users: usersReducer,

  categories: categoriesReducer,
  products: productsReducer,
});

const persistedCurrentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : {};

const persistedUsers = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

export const store = createStore(
  rootReducer,
  {
    currentUser: persistedCurrentUser,
    users: persistedUsers,
  },
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem(
    "currentUser",
    JSON.stringify(store.getState().currentUser)
  );

  localStorage.setItem("users", JSON.stringify(store.getState().users));
});
