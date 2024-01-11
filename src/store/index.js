import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { themeReducer } from "./reducers/themeReducer";
import { currentUserReducer } from "./reducers/currentUserReducer";
import { usersReducer } from "./reducers/usersReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  currentUser: currentUserReducer,
  users: usersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
