function getOption(
  data,
  color,
) {
  return {
    color,
    series: [
      {
        type: 'pie',
        radius: ['0', '70%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        legendHoverLink: false,
        hoverAnimation: false,
        label: {
          normal: {
            show: true,
            position: 'inner',
            formatter: function(params) {
              const percent = `${params.percent}%`;
              return percent;
            },
            textStyle: {
              fontSize: 8,
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data,
      },
    ],
  };
}

export default getOption;