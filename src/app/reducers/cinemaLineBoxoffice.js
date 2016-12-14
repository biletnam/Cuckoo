import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';

const initialState = {
  cinemaLineBoxoffice: {},
};

const handler = {};

handler[types.GET_CINEMA_LINE_REVENUES] = (state, action) => {
  return Object.assign({}, ...state, {
    ...action.cinemaLineBoxoffice,
  });
};

export default handleActions(handler, initialState);
