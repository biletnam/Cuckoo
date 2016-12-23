import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';

const initialState = {
  cinemaBoxoffice: {},
  loading: false,
};


const handler = {};

handler[types.GET_CINEMA_REVENUES] = (state = initialState, action) => {
  return Object.assign({}, ...state, {
    cinemaBoxoffice: action.cinemaBoxoffice,
    loading: true,
  });
};

export default handleActions(handler, initialState);
