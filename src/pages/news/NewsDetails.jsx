import React from 'react';

import NewsSelector from 'app/selectors/news';

import connect from 'utils/connect';

class NewsDetails extends React.Component {

  constructor(props) {
    super(...props);
  }

  componentWillMount() {
    this.props.actions.GetNewsList();
  }

  render() {
    const { newsList } = this.props
    console.log(this.props)
    if (!newsList) {
      return null;
    }
    console.log(newsList)
    return (
      <div className="news-details">
        {newsList.count}
      </div>
    );
  }
}

export default connect(NewsDetails, NewsSelector);
