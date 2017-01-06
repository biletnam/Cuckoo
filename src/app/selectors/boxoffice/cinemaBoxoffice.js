import { createSelector } from 'reselect';

const getCinemaBoxoffice = state => {
  const { loading, cinemaBoxoffice } = state.cinema
  if (loading) {
    const {
      revSumShow,
      saledSeatSumShow,
      seatPerShowSumShow,
      avgPriceShow,
      data,
    } = cinemaBoxoffice;
    const firstRow = {
      firstLine: '合计',
      secondLine: revSumShow,
      thirdLine: saledSeatSumShow,
      fourthLine: seatPerShowSumShow,
      fifthLine: avgPriceShow,
    }
    let dataSource = [firstRow]
    data.forEach(item => {
      const dataSourceVaule = {
        firstLine: item.mTitle,
        secondLine: item.revShow,
        thirdLine: item.saledSeatShow,
        fourthLine: item.seatPerShowShow,
        fifthLine: item.avgPriceShow,
      }
      dataSource.push(dataSourceVaule)
    })
    return dataSource
  }
};

export default createSelector(
  getCinemaBoxoffice,
  (cinemaBoxoffice) => {
    return {
      cinemaBoxoffice,
    };
  },
);
