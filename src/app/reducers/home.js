import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';

const initialState = {
  data: 0,
};

const handler = {};

handler[types.GET_MOVIE_REVENUES] = (state, action) => {
  return Object.assign({}, state, {
    data: action.data,
  });
};

export default handleActions(handler, initialState);
