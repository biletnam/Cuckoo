import React from 'react';

const TYPE = [
  '全部',
  '快讯',
  '解读',
  '海湾',
  '产业圈',
];

class SwitchYpe extends React.Component {
  constructor(props) {
    super(...props);
  }
  render() {
    return (
      <ul className="news-switch-type">
        {
          TYPE.map((item, index) =>
            <li key={index}>{item}</li>
          )
        }
      </ul>
    );
  }
}

export default SwitchYpe;
