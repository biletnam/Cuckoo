function getLineOption(
  legendData,
  xData,
  firstData,
  secondData,
) {
  return {
    color: ['#48B892', '#EAFF51'],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: legendData
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
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
        type: 'line',
        data: firstData,
      },
      {
        name: legendData[1],
        type: 'line',
        data: secondData,
      },
    ],
  };
}

export default getLineOption;
