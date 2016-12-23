import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';

const initialState = {
  cinemaLineBoxoffice: {},
  loading: false,
};

const handler = {};

handler[types.GET_CINEMA_LINE_REVENUES] = (state, action) => {
  return Object.assign({}, ...state, {
    cinemaLineBoxoffice: action.cinemaLineBoxoffice,
    loading: true,
  });
};

export default handleActions(handler, initialState);
