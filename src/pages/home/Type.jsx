import React from 'react';

class Type extends React.Component {
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
          <li
            onClick={() => this.routerDetailsPage('schedules')}
          >
            <i className="film-screening" />
            <p>实时排片</p>
          </li>
          <li>
            <i className="trend" />
            <p>票房走势</p>
          </li>
          <li>
            <i className="vs" />
            <p>影片对比</p>
          </li>
          <li>
            <i className="follow" />
            <p>我的关注</p>
          </li>
        </ul>
      </div>
    );
  }
};

export default Type;
