function getLineOption(
  legendData,
  xData,
  firstData,
  secondData,
) {
  return {
    color: ['#48B892', '#EAFF51'],
    grid: {
      top: 15,
      right: '10%',
      left: '10%',
      bottom: 25,
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: xData,
        axisTick: {
            show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
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
