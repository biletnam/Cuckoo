import * as types from '../constants/ActionTypes';
import request from 'utils/request';
import { API } from 'utils/api';

function receiveMovieRevenuesData(resp) {
  return {
    type: types.GET_MOVIE_REVENUES,
    filmBoxoffice: resp.data,
  };
}

export function GetMovieRevenues(date) {
  return (dispatch) => {
    const url = API.oneDayMovieRevenues;
    const data = {
      date: date,
      cityId: '',
      pageIndex: 1,
      pageSize: 10,
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
    type: types.GET_CINEMA_REVENUES,
    cinemaBoxoffice: resp,
  };
}

export function GetCinemaRevenues(date) {
  return (dispatch) => {
    const url = API.oneDayCinemaRevenues;
    const data = {
      targetDate: date,
      pageSize: 50,
      pageIdx: 0,
      cinemaLineId: '',
      cityId: '',
      provinceId: '',
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
    type: types.GET_CINEMA_LINE_REVENUES,
    cinemaLineBoxoffice: resp,
  };
}

export function GetCinemaLineRevenues(date) {
  return (dispatch) => {
    const url = API.oneDayCinemaLineRevenues;
    const data = {
      targetDate: date,
      cityId: '',
      provinceId: '',
    };
    return request.GET(url, data)
      .then(function(resp) {
        return dispatch(receiveCinemaLineRevenuesData(JSON.parse(resp)));
      }, function(err) {
        console.log(err);
      });
  };
}


