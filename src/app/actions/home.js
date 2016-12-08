import * as types from '../constants/ActionTypes';

export function fetchData() {
  return (dispatch, getState) => {
    return dispatch({
      type: types.RECIEVE_DATA,
      data: 1,
    });
  };
}
