import { increment, decrement, decrement5 } from "../types";

export const incrementAction = (value = 1) => (dispatch) => {
  dispatch({
    type: increment,
    payload: value,
  });
};

export const decrementAction = () => (dispatch) => {
  dispatch({
    type: decrement,
  });
};
export const decrementAction5 = () => (dispatch) => {
  dispatch({
    type: decrement5,
  });
};
