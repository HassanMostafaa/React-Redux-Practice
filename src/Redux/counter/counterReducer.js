import { increament, decreament } from "./actionTypes";

const initlaState = {
  count: 0,
};

export const countReducer = (state = initlaState, action) => {
  switch (action.type) {
    case increament:
      return {
        count: state.count + 1,
      };

    case decreament:
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};
