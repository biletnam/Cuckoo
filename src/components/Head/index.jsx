import React from 'react';

import './head.css';

class Head extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      title,
    } = this.props;
    return (
      <div className="head">
        <p className="head-title">{title}</p>
      </div>
    );
  }
}

Head.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Head;
