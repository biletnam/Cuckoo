import React from 'react';

import { FOOTER_TYPE } from 'utils/constant';

import './footer.scss';

const content = [{
  text: '电影票房',
  type: 'boxoffice',
}, {
  text: '制片分析',
  type: 'production',
}, {
  text: '热门新闻',
  type: 'news',
}, {
  text: '上映日历',
  type: 'calendar',
}];

const Footer = (props) => {
  const { type } = props;
  return (
    <div className={`footer ${type}`}>
      {content.map((item, i) =>
        <div type={item.type} key={i} className="tab" >
          <i className={`icon-${FOOTER_TYPE[i]} icon`} />
          <span className={`span-${FOOTER_TYPE[i]}`}>{item.text}</span>
        </div>
       )}
    </div>
  );
};

Footer.propTypes = {
  type: React.PropTypes.string.isRequired,
};

export default Footer;
