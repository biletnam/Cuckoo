function getBarOption(
  legendData,
  xData,
  firstData,
  secondData,
) {
  return {
    color: ['#F7B029', '#3AB094'],
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
        type: 'bar',
        data: firstData,
        barGap: '0%',
      },
      {
        name: legendData[1],
        type: 'bar',
        data: secondData,
        barGap: '0%',
      },
    ],
  };
}

export default getBarOption;
