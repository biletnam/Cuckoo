import React from 'react';

const Type = props => {
  return (
    <div className="type">
      <ul>
        <li>
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
};

export default Type;
