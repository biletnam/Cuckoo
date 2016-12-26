import React from 'react';

import Head from 'components/Head';
import Footer from 'components/Footer';

import { Loading } from 'cuckoo-ui';

import NewsSelector from 'app/selectors/news';

import Item from './Item';

import connect from 'utils/connect';
import { FOOTER_TYPE } from 'utils/constant';

import './style.scss';

const TYPE = [
  '全部',
  '快讯',
  '解读',
  '海外',
  '产业圈',
];

const TYPE_INDEX = {
  '2980': 0,
  '2133': 1,
  '155': 2,
  '354': 3,
  '225': 4,
}

class News extends React.Component {
  constructor(props) {
    super(...props);
    this.routerBannerDetail = this.routerBannerDetail.bind(this)
  }

  componentWillMount() {
    this.props.actions.GetNewsList(0);
  }

  routerBannerDetail() {
    const { url } = this.props.newsList.topRecommend;
    window.location.href = url;
  }
  toggleType(type) {
    const { actions, newsList } = this.props
    if (TYPE_INDEX[newsList.count] !== type) {
      actions.GetNewsList(type)
    }
  }

  render() {
    const { newsList } = this.props
    if (!newsList) {
      return <Loading />;
    }
    const { list, topRecommend, count } = newsList;
    const { img, title } = topRecommend;
    return (
      <div className="news">
        <Head
          title="Cuckoo"
          back={false}
        />
        <div className="news-frame">
          <ul className="news-switch-type">
            {
              TYPE.map((item, index) =>
                <li
                  key={index}
                  onClick={this.toggleType.bind(this, index)}
                >{item}</li>
              )
            }
          </ul>
          <div className="news-details">
          {
            count === 2980 &&
            <div
              className="news-banner"
              style={{backgroundImage: `url(${img})`}}
              onClick={this.routerBannerDetail}
            >
              <p>{title}</p>
            </div>
          }
            <ul className="news-details-item">
            {
              list.map(item => 
                <Item 
                  key={item.newsId}
                  item={item}
                />
              )
            }
            </ul>
          </div>
        </div>
        <Footer type={FOOTER_TYPE[2]} />
      </div>
    );
  }
}

export default connect(News, NewsSelector);
