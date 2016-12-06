import React from 'react'

import Head from 'components/Head/index'

export default class Home extends React.Component {
    constructor(...args) {
        super(...args)
    }
    render() {
      return (
        <div>
          <Head title='cuckoo' />
        </div>
      )
    }
}

