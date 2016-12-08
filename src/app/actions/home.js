import * as types from '../constants/ActionTypes';
import request from 'utils/request';
import { API } from 'utils/api';

function receiveMovieRevenuesData(resp) {
  return {
    type: types.GET_MOVIE_REVENUES,
    boxoffice: resp,
  };
}

export function GetMovieRevenues() {
  return (dispatch) => {
    const url = API.oneDayMovieRevenues;
    const data = {
      targetDate: 20161208,
    };
    return request.GET(url, data)
      .then(function(resp) {
        return dispatch(receiveMovieRevenuesData(JSON.parse(resp)));
      }, function(err, msg) {
        console.log(err);
      });
  };
}
