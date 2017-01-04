import * as types from '../constants/ActionTypes';
import request from 'utils/request';
import { API } from 'utils/api';

function receiveMovieSchedules(resp) {
  return {
    type: types.GET_MOVIE_SCHEDULES,
    schedules: resp,
  };
}

export function GetMovieSchedules(date) {
  return (dispatch) => {
    const url = API.AllMovieSchedules;
    const data = {
      targetDate: date,
      movieIds: '',
    };
    return request.GET(url, data)
      .then(function(resp) {
        return dispatch(receiveMovieSchedules(JSON.parse(resp)));
      }, function(err) {
        console.log(err);
      });
  };
}

export function ChangeType(index) {
  return {
    type: types.GET_TYPE,
    index,
  }
}
