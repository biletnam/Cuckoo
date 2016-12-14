import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';

const initialState = {
  cinemaBoxoffice: {},
};


const handler = {};

handler[types.GET_CINEMA_REVENUES] = (state, action) => {
  return Object.assign({}, ...state, {
    ...action.cinemaBoxoffice,
  });
};

export default handleActions(handler, initialState);
