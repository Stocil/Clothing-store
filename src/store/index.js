import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { themeReducer } from "./reducers/themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
