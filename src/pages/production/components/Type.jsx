import React from 'react';

const TYPE = [
  {
    key: 'production',
    text: '类型分析',
  },
  {
    key: 'film-ranking',
    text: '电影排行',
  },
  {
    key: 'celebrities-ranking',
    text: '影人排行',
  }
]

class Type extends React.PureComponent {
  static contextTypes = {
    router: React.PropTypes.object,
  }

  routerOtherType(pathname) {
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
