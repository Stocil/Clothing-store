import { SWITCH_THEME } from "../actions/types";

const initialState = JSON.parse(localStorage.getItem("theme")) || "dark";

export function themeReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME: {
      localStorage.setItem(
        "theme",
        JSON.stringify(state === "dark" ? "light" : "dark")
      );

      return state === "dark" ? "light" : "dark";
    }

    default: {
      return state;
    }
  }
}
