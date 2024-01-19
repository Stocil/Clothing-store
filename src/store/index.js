import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { thunk } from "redux-thunk";

import { themeReducer } from "./reducers/themeReducer";
import { currentUserReducer } from "./reducers/currentUserReducer";
import { usersReducer } from "./reducers/usersReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  currentUser: currentUserReducer,
  users: usersReducer,
  categories: categoriesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
