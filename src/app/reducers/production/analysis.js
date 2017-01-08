import { handleActions } from 'redux-actions';
import * as types from 'app/constants/ActionTypes';

const initialState = {
  analysis: {},
};

const handler = {};

handler[types.GET_ANALYSIS_DETAILS] = (state, action) => {
  return Object.assign({}, ...state, {
    analysis: action.analysis,
  });
};

export default handleActions(handler, initialState);
