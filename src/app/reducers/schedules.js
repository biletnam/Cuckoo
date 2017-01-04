import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';

const initialState = {
  schedules: {},
};

const handler = {};

handler[types.GET_MOVIE_SCHEDULES] = (state, action) => {
  return Object.assign({}, ...state, {
    ...action.schedules,
  });
};

handler[types.GET_TYPE] = (state, action) => {
	return Object.assign({}, ...state, {
		type: action.index
	})
};

export default handleActions(handler, initialState);
