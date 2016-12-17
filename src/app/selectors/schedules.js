import { createSelector } from 'reselect';

import fecha from 'utils/fecha';

const GetMovieSchedules = (state) => {
  const {
    sumSCnt,
    upd,
    name,
    dt,
    data,
  } = state.schedules;
  if (name) {
    const date = fecha.getDateString(dt);
    const sumSCntPercent = `${(sumSCnt / 10000).toFixed(2)}万场}`;
    let otherData = 100;
    const topData = data.slice(0, 5).map((item) => {
      const schedulesPercent = parseFloat((item.sCntRate * 100).toFixed(2));
      otherData -= schedulesPercent;
      const Piename = item.mTitle;
      return { schedulesPercent, Piename };
    });
    const other = {
      schedulesPercent: otherData,
      Piename: '其他',
    };
    topData.push(other);
    const pieData = topData.map(item => item.schedulesPercent);
    data.forEach((info) => {
      info.gCntRate = `${(info.gCntRate * 100).toFixed(2)}%`;
      info.sCntRate = `${(info.sCntRate * 100).toFixed(2)}%`;
      info.saledRate = `${(info.saledRate * 100).toFixed(2)}%`;
      info.sCnt = `${(info.sCnt / 10000).toFixed(2)}万场`;
    });
    const schedules = {
      date,
      sumSCntPercent,
      topData,
      pieData,
      data,
      upd,
      name,
    };

    return schedules;
  }
};

export default createSelector(
  GetMovieSchedules,
  (schedules) => {
    return {
      schedules,
    };
  },
);
