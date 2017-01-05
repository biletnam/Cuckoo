import React from 'react';

const TYPE = [
  {
    key: 'analysis',
    text: '类型分析',
  },
  {
    key: 'film-ranking',
    text: '电影排行',
  },
  {
    key: 'actor-ranking',
    text: '影人排行',
  }
]

class Type extends React.PureComponent {
  static contextTypes = {
    router: React.PropTypes.object,
  }

  routerDetailsPage(pathname) {
    this.context.router.replace({
      pathname,
    });
  }
  render() {
    return (
      <div className="type">
        <ul>
          {
            TYPE.map(item => 
              <li
                key={item.key}
                onClick={() => this.routerOtherType(item.key)}
              >
                <p>{item.text}</p>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
};

export default Type;
