import * as types from '../constants/ActionTypes';
import request from 'utils/request';
import { API } from 'utils/api';

function receiveDate(resp) {
  return {
    type: types.GET_DATE,
    date: resp.data,
  };
}

export function GetDate() {
  return (dispatch) => {
    const url = API.date;
    return request.GET(url)
      .then(function(resp) {
        return dispatch(receiveDate(JSON.parse(resp)));
      }, function(err) {
        console.log(err);
      });
  };
}
