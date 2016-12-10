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
      }, function(err) {
        console.log(err);
      });
  };
}

function receiveCinemaRevenuesData(resp) {
  return {
    type: types.GET_MOVIE_REVENUES,
    boxoffice: resp,
  };
}

export function GetCinemaRevenues() {
  return (dispatch) => {
    const url = API.oneDayCinemaRevenues;
    const data = {
      targetDate: 20161208,
      pageSize: 50,
      pageIdx: 0,
    };
    return request.GET(url, data)
      .then(function(resp) {
        return dispatch(receiveCinemaRevenuesData(JSON.parse(resp)));
      }, function(err) {
        console.log(err);
      });
  };
}

function receiveCinemaLineRevenuesData(resp) {
  return {
    type: types.GET_MOVIE_REVENUES,
    boxoffice: resp,
  };
}

export function GetCinemaLineRevenues() {
  return (dispatch) => {
    const url = API.oneDayCinemLineaRevenues;
    const data = {
      targetDate: 20161208,
    };
    return request.GET(url, data)
      .then(function(resp) {
        return dispatch(receiveCinemaLineRevenuesData(JSON.parse(resp)));
      }, function(err) {
        console.log(err);
      });
  };
}
