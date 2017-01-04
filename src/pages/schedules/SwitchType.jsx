import React from 'react';

const TYPE = [
  '今天',
  '明天',
  '后天',
  '更多日期',
];

class SwitchType extends React.PureComponent {
  static contextTypes = {
    router: React.PropTypes.object,
  }

  constructor(props) {
    super(...props);
  }

  switchType(index) {
    if (index === 3) {
      this.context.router.replace({
        pathname: '/datefilter'
      });
    } else {
      const { ChangeType } = this.props
      ChangeType(index)
    }
  }

  render() {
    console.log(this)
    return (
      <ul className="switch-type">
        {
          TYPE.map((item, index) =>
            <li
              key={index}
              onClick={() => this.switchType(index)}
            >{item}</li>
          )
        }
      </ul>
    );
  }
}

SwitchType.propTypes = {
  ChangeType: React.PropTypes.func.isRequired,
};

export default SwitchType;
