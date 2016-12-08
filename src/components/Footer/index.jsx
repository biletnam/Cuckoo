import React from 'react';

import boxoffice_on from 'assets/icon/boxoffice_on.png';
import boxoffice_off from 'assets/icon/boxoffice_off.png';
import calendar_off from 'assets/icon/calendar_off.png';
import calendar_on from 'assets/icon/calendar_on.png';
import production_on from 'assets/icon/production_on.png';
import production_off from 'assets/icon/production_off.png';
import news_on from 'assets/icon/news_on.png';
import news_off from 'assets/icon/news_off.png';

import './footer.scss';

const content = [{
  text: '电影票房',
  type: 'boxoffice',
  src: boxoffice_off,
}, {
  text: '制片分析',
  type: 'production',
  src: production_off,
}, {
  text: '热门新闻',
  type: 'news',
  src: news_off,
}, {
  text: '上映日历',
  type: 'calendar',
  src: calendar_off,
}];

const Footer = (props) => {
  const { type } = props;
  return (
    <div className="footer">
      {content.map((item, i) =>
        <div type={item.type} key={i} className="tab">
          <img src={item.src} className="tab-icon" />
          <span>{item.text}</span>
        </div>
       )}
    </div>
  );
};

Footer.propTypes = {
  type: React.PropTypes.number.isRequired,
};

export default Footer;
