import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';

const initialState = {
  newsList: {},
  loading: false,
};

const handler = {};

handler[types.GET_NEWS_DATA] = (state, action) => {
  return Object.assign({}, ...state, {
    newsList: action.newsList,
    loading: true,
  });
};

export default handleActions(handler, initialState);
