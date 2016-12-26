import React from 'react';

class Item extends React.PureComponent {

  routerNewsDetails(url) {
    window.location.href = url;
  }

  render() {

    const { url, img, title, summary, ptime, source } = this.props.item;
    const sliceSummary = `${summary.slice(0, 15)}...`
    return (
      <li
        onClick={this.routerNewsDetails.bind(this, url)}
      >
        <div
          className="news-details-img"
          style={{backgroundImage: `url(${img})`}}
        ></div>
        <div className="news-details-text">
          <p className="text-title">{title}</p>
          <p className="text-summary">{sliceSummary}</p>
          <p className="text-source">
            <span>{ptime}</span>
            <span>{source}</span>
          </p>
        </div>
      </li>
  )}
};

Item.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default Item;
