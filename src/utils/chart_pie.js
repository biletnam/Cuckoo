function getOption(
  data,
  color,
) {
  return {
    color,
    series: [
      {
        type: 'pie',
        radius: ['35%', '70%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        legendHoverLink: false,
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'position',
        //     formatter: '{b} {c}%',
        //     lineText: {
        //       fontSize: 10,
        //     },
        //   },
        //   emphasis: {
        //     show: true,
        //     position: 'center',
        //     textStyle: {
        //       fontSize: '13',
        //       fontWeight: 'normal',
        //     },
        //   },
        // },
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
