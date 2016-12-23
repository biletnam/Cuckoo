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
    const dataSource = []
    data.forEach((item) => {
      const day = `已上映${item.days}天`;
      const revSort = (item.rev / 1000000).toFixed(0);
      const rev = revSort.toString().length >= 5 ?
        `${(revSort / 10000).toFixed(1)}亿` : `${(item.rev / 1000000).toFixed(2)}万`;
      const revRate = `${(item.revRate * 100).toFixed(2)}%`;
      const sCntRate = `${(item.sCntRate * 100).toFixed(2)}%`;
      const sCnt = `${(item.sCnt / 10000).toFixed(2)}万场`;
      const seat = `${(item.seat / 100000).toFixed(2)}%`;
      const sumRev = `${(item.sumRev / 10000000000).toFixed(2)}亿`;
      const dataSourceVaule = {
        firstLine: [
          item.mTitle,
          day,
        ],
        secondLine: [
          rev,
          revRate,
        ],
        thirdLine: [
          sCntRate,
          sCnt
        ],
        fourthLine: seat,
        fifthLine: sumRev,
      }
      dataSource.push(dataSourceVaule)
    });
    const sortData = data.slice(0, 3);
    const pieData = [];
    let pie = 0;
    sortData.forEach((item) => {
      pieData.push(item.revRate);
      pie += parseFloat(item.revRate);
    });
    pieData.push(1 - pie);
    const sumSCntS = `${(sumSCnt / 10000).toFixed(2)}万`;
    const topData = sortData.map(item => {
      const revSort = (item.rev / 1000000).toFixed(0);
      const rev = revSort.toString().length >= 5 ?
        `${(revSort / 10000).toFixed(1)}亿` : `${(item.rev / 1000000).toFixed(2)}万`;
      const revRate = `${(item.revRate * 100).toFixed(2)}%`;
      const mTitle = item.mTitle
      return { mTitle, rev, revRate }
    })
    filmBoxoffice = {
      aveTicketPrice,
      todayBoxOffice,
      topData,
      pieData,
      upd,
      dataSource,
      sumSCntS,
      newMovieCnt,
    };
  }
  return filmBoxoffice;
};

export default createSelector(
  getFilmBoxoffice,
  (filmBoxoffice) => {
    return {
      filmBoxoffice,
    };
  },
);
