/**
 * @fileoverview App level state actions
 *
 */

export const simpleAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};
