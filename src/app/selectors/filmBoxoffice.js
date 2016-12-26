import { createSelector } from 'reselect';

const getFilmBoxoffice = (state) => {
  const { filmBoxoffice: film, loading } = state.film;
  let filmBoxoffice
  if (loading) {
    const dataSource = []
    const { updateTime, sumShowCntShow, movieCountShow, avgPriceRmbShow, items, sumRevRmbShow } = film;
    items.forEach((info) => {
      const { movieTitle, daysShow, revRmbShow, revRateShow, showCntRateShow, showCntShow, saledSeatRateShow } = info
      const dataSourceVaule = {
        firstLine: [
          movieTitle,
          daysShow,
        ],
        secondLine: [
          revRmbShow,
          revRateShow,
        ],
        thirdLine: [
          showCntRateShow,
          showCntShow
        ],
        fourthLine: saledSeatRateShow,
        fifthLine: revRmbShow,
      }
      dataSource.push(dataSourceVaule)
    });
    let sortData = items.slice(0, 3);
    const pieData = [];
    let pie = 0;
    sortData.forEach((item) => {
      pieData.push(item.revRate);
      pie += parseFloat(item.revRate);
    });
    pieData.push(1 - pie);
    const topData = sortData.map(item => {
      const { movieTitle, revRateShow, revRmbShow } = item
      return { movieTitle, revRateShow, revRmbShow }
    })
    filmBoxoffice = {
      updateTime,
      sumShowCntShow,
      movieCountShow,
      avgPriceRmbShow,
      dataSource,
      sumRevRmbShow,
      topData,
      pieData,
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
