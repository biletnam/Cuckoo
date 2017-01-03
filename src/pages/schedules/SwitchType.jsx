import React from 'react';

const TYPE = [
  '今天',
  '明天',
  '后天',
  '更多日期',
];

class SwitchYpe extends React.PureComponent {
  render() {
    return (
      <ul className="switch-type">
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
