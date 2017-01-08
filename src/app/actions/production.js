import * as types from '../constants/ActionTypes';
import request from 'utils/request';
import { API } from 'utils/api';

function receiveAnalysisDetails(resp) {
  return {
    type: types.GET_ANALYSIS_DETAILS,
    analysis: resp.data,
  };
}

export function GetAnalysisDetails() {
  return (dispatch) => {
    const url = API.analysis;
    const data = {
      startMonth: '201601',
      endMonth: '201612',
      genres: '185%2C201',
      movieDataFlag: true,
    };
    return request.GET(url, data)
      .then(function(resp) {
        return dispatch(receiveAnalysisDetails(JSON.parse(resp)));
      }, function(err) {
        console.log(err);
      });
  };
}

function receiveFilmRanking(resp) {
  return {
    type: types.GET_FILM_RANKING,
    filmRanking: resp.data,
  };
}

export function GetFilmRanking() {
  return (dispatch) => {
    const url = API.filmRanking;
    const data = {
      year: '2016-2016',
      origin: 3,
      sortType: 2,
      pageIndex: 1,
    };
    return request.GET(url, data)
      .then(function(resp) {
        return dispatch(receiveFilmRanking(JSON.parse(resp)));
      }, function(err) {
        console.log(err);
      });
  };
}

function receiveCelebritiesRanking(resp) {
  return {
    type: types.GET_CELEBRITIES_RANKING,
    celebritiesRanking: resp.data,
  };
}

export function GetCelebritiesRanking() {
  return (dispatch) => {
    const url = API.analysis;
    const data = {
      pageIndex: 1,
      movieYearRange: '2013-2017',
    };
    return request.GET(url, data)
      .then(function(resp) {
        return dispatch(receiveAnalysisDetails(JSON.parse(resp)));
      }, function(err) {
        console.log(err);
      });
  };
}
