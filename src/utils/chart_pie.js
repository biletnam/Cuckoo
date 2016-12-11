function getOption(
  data,
  color,
  text,
) {
  return {
    color,
    title: {
      show: true,
      text,
      left: 'center',
      top: 'center',
      textStyle: {
        color: '#585E6C',
        fontSize: 16,
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['35%', '70%'],
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
