import React from 'react';
import classnames from 'classnames';

import './head.scss';

class Head extends React.PureComponent {

  constructor(...props) {
    super(...props);
    this.getBack = this.getBack.bind(this);
  }

  getBack() {
    history.back();
  }

  render() {
    const {
      title,
      back,
    } = this.props;
    const headTitle = classnames({
      'head-title': true,
      'head-back-icon': back
    })
    return (
      <div className="head">
        {
          back &&
          <i
            className="head-back"
            onClick={this.getBack}
          />
        }
        <span className={headTitle}>{title}</span>
      </div>
    );
  }
}

Head.propTypes = {
  title: React.PropTypes.string.isRequired,
  back: React.PropTypes.bool.isRequired,
};

export default Head;
