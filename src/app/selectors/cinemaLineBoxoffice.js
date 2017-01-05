import { createSelector } from 'reselect';

const getCinemaLineBoxoffice = state => {
  const { loading, cinemaLineBoxoffice: boxoffice } = state.cinemaLine
  if (loading) {
    const {
      revSumShow,
      saledSeatSumShow,
      seatPerShowSumShow,
      avgPriceShow,
      showtimeSumShow,
      movieCountShow,
      data,
    } = boxoffice;
    let dataSource = []
    data.forEach(item => {
      const dataSourceVaule = {
        firstLine: item.cinemaLineName,
        secondLine: item.revShow,
        thirdLine: item.saledSeatShow,
        fourthLine: item.seatPerShowShow,
        fifthLine: item.avgPriceShow,
      }
      dataSource.push(dataSourceVaule)
    })
    const sortData = data.slice(0, 3);
    const pieData = [];
    let pie = 0;
    sortData.forEach((item) => {
      const revRate = item.boxOfficeRateShow.split('%')[0];
      pieData.push(revRate);
      pie += parseFloat(revRate);
    });
    pieData.push(100 - pie);
    const cinemaLineBoxoffice = {
      dataSource,
      avgPriceShow,
      showtimeSumShow,
      movieCountShow,
      revSumShow,
      sortData,
      pieData,
    }
    return cinemaLineBoxoffice
  }
}

export default createSelector(
  getCinemaLineBoxoffice,
  (cinemaLineBoxoffice) => {
    return {
      cinemaLineBoxoffice,
    };
  },
);
