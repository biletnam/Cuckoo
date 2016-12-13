import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';

const initialState = {
};

const handler = {};

handler[types.GET_MOVIE_REVENUES] = (state, action) => {
  return Object.assign({}, state, {
    ...action.boxoffice,
  });
};

handler[types.GET_CINEMA_REVENUES] = (state, action) => {
  return Object.assign({}, state, {
    ...action.cinemaBoxoffice,
  });
};

handler[types.GET_CINEMA_LINE_REVENUES] = (state, action) => {
  return Object.assign({}, state, {
    ...action.cinemaLineBoxoffice,
  });
};

export default handleActions(handler, initialState);
