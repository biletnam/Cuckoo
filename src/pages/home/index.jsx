import React from 'react';

import Head from 'components/Head/index';
import Footer from 'components/Footer/index';

const TYPE = {
  boxoffice: 0,
  production: 1,
  news: 2,
  calendar: 3,
};

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home-content">
          <Head title="cuckoo" />
        </div>
        <Footer type={TYPE.boxoffice} />
      </div>
    );
  }
}

export default Home;
