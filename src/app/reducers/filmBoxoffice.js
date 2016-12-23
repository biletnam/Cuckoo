import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';

const initialState = {
  filmBoxoffice: {},
  loading: false,
};

const handler = {};

handler[types.GET_MOVIE_REVENUES] = (state, action) => {
  return Object.assign({}, ...state, {
    filmBoxoffice: action.filmBoxoffice,
    loading: true,
  });
};

export default handleActions(handler, initialState);
