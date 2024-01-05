import { SWITCH_THEME } from "../actions/types";

const initialState = "dark";

export function themeReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME: {
      return state === "dark" ? "light" : "dark";
    }

    default: {
      return state;
    }
  }
}
