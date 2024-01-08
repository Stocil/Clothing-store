import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { themeReducer } from "./reducers/themeReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  currentUser: userReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
