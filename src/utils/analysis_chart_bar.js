function getBarOption(
  legendData,
  xData,
  firstData,
  secondData,
) {
  return {
    color: ['#F7B029', '#3AB094'],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: legendData
    },
    xAxis: [
      {
        type: 'category',
        data: xData
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: legendData[0],
        type: 'bar',
        data: firstData,
      },
      {
        name: legendData[1],
        type: 'bar',
        data: secondData,
      },
    ],
  };
}

export default getBarOption;
