import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';

const initialState = {
  boxoffice: {},
};

const handler = {};

handler[types.GET_MOVIE_REVENUES] = (state, action) => {
  return Object.assign({}, state, {
    boxoffice: action.boxoffice,
  });
};

export default handleActions(handler, initialState);
