import React from 'react'

import Header from './Header'
import Portfolio from './Portfolio'
import Contact from './Contact'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Portfolio />
        <Contact />
      </div>
    )
  }

}
