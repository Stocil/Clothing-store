import { INCREASE_SCORE, DECREASE_SCORE } from "../actions/types";

const initialState = {
  score: 0,
};

export function scoreReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_SCORE: {
      return { ...state, score: state.score + action.payload };
    }

    case DECREASE_SCORE: {
      return { ...state, score: state.score - action.payload };
    }

    default: {
      return state;
    }
  }
}
