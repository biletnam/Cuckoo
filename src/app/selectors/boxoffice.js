import { createSelector } from 'reselect';

const getFilmBoxoffice = (state) => {
  const { upd, data, sumSCnt, aveSeat, sumRev, newMovieCnt } = state.filmBoxoffice;
  let filmBoxoffice;
  if (upd) {
    const aveTicketPrice = (sumRev / sumSCnt / aveSeat / 100).toFixed(2);
    let todayBoxOffice = (sumRev / 1000000).toFixed(0);
    if (todayBoxOffice.length < 5) {
      todayBoxOffice = `${todayBoxOffice}万`;
    } else {
      todayBoxOffice = `${(todayBoxOffice / 10000).toFixed(2)}亿`;
    }
    data.forEach((item) => {
      const revSort = (item.rev / 1000000).toFixed(0);
      item.rev = revSort.toString().length >= 5 ?
        `${(revSort / 10000).toFixed(1)}亿` : `${(item.rev / 1000000).toFixed(2)}万`;
      item.revRate = (item.revRate * 100).toFixed(2);
      item.sCntRate = `${(item.sCntRate * 100).toFixed(2)}%`;
      item.sCnt = `${(item.sCnt / 10000).toFixed(2)}万场`;
      item.seat = `${(item.seat / 100000).toFixed(2)}%`;
      item.sumRev = `${(item.sumRev / 10000000000).toFixed(2)}亿`;
    });
    const sortData = data.slice(0, 3);
    const pieData = [];
    let pie = 0;
    sortData.forEach((item) => {
      pieData.push(item.revRate);
      pie += parseFloat(item.revRate);
    });
    pieData.push(100 - pie);
    const sumSCntS = `${(sumSCnt / 10000).toFixed(2)}万`;
    filmBoxoffice = {
      aveTicketPrice,
      todayBoxOffice,
      sortData,
      pieData,
      upd,
      data,
      sumSCntS,
      newMovieCnt,
    };
  }
  return filmBoxoffice;
};

const getCinemaBoxoffice = state => state.cinemaBoxoffice;

const getCinemaLineBoxoffice = state => state.cinemaLineBoxoffice;

export default createSelector(
  getFilmBoxoffice,
  getCinemaBoxoffice,
  getCinemaLineBoxoffice,
  (filmBoxoffice, cinemaBoxoffice, cinemaLineBoxoffice) => {
    return {
      filmBoxoffice,
      cinemaBoxoffice,
      cinemaLineBoxoffice,
    };
  },
);
