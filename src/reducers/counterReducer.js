import { increment, decrement, decrement5 } from "../types";
const initialValue = {
  count: 0,
  touhihul: "sera",
};

export default (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case increment:
      return {
        ...state,
        count: state.count + payload,
      };

    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };

    case decrement5:
      return {
        ...state,
        count: state.count - 5,
      };

    default:
      return state;
  }
};

// [1,2,3]

// add(6)
// [1,2,3,6]
