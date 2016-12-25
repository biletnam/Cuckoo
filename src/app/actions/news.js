import * as types from '../constants/ActionTypes';
import request from 'utils/request';
import { API } from 'utils/api';

function receiveNewsData(resp) {
  return {
    type: types.GET_NEWS_DATA,
    newsList: resp.data,
  };
}

export function GetNewsList() {
  return (dispatch) => {
    const url = API.newsList;
    const data = {
      pTime: -1,
      pageSize: 20,
      proNewsType: 0,
      recommendType: 2,
    };
    return request.GET(url, data)
      .then(function(resp) {
        return dispatch(receiveNewsData(JSON.parse(resp)));
      }, function(err) {
        console.log(err);
      });
  };
}
