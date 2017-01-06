import React from 'react';

const TYPE = [
  {
    key: 'anslysis-all-boxoffice',
    text: '累计票房',
    type: 'all-boxoffice',
  },
  {
    key: 'anslysis-average-boxoffice',
    text: '平均票房',
    type: 'average-boxoffice',
  },
  {
    key: 'anslysis-film-number',
    text: '影片数量',
    type: 'film-number',
  },
  {
    key: 'anslysis-boxoffice-percent',
    text: '票房占比',
    type: 'boxoffice-percent',
  }
]

class AnalysisType extends React.PureComponent {
  static contextTypes = {
    router: React.PropTypes.object,
  }

  routerOtherType(type) {
    this.context.router.replace({
      pathname: '/production',
      query: {
        type,
      }
    });
  }
  render() {
    return (
        <ul>
          {
            TYPE.map(item => 
              <li
                key={item.key}
                onClick={() => this.routerOtherType(item.type)}
              >
                {item.text}
              </li>
            )
          }
        </ul>
    );
  }
};

export default AnalysisType;
