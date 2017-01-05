import React from 'react';

const TYPE = [
  {
    classname: 'film-screening',
    text: '实时排片',
    router: 'schedules',
  },
  {
    classname: 'trend',
    text: '票房走势',
    router: 'trend',
  },
  {
    classname: 'vs',
    text: '影片对比',
    router: 'film-vs',
  },
  {
    classname: 'follow',
    text: '我的关注',
    router: 'my-follow',
  },
]

class Type extends React.PureComponent {
  static contextTypes = {
    router: React.PropTypes.object,
  }

  routerDetailsPage(pathname) {
    this.context.router.push({
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
                key={item.classname}
                onClick={() => this.routerDetailsPage(item.router)}
              >
                <i className={item.classname} />
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
