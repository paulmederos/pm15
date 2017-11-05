import React from 'react'

import Header from './Header'
import Portfolio from './Portfolio'
import Adventures from './Adventures'
import Contact from './Contact'

import TerritoryLaunch from './projects/TerritoryLaunch'
import PSExpansion from './projects/PSExpansion'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleProject: null
    }

    this.handleCardPressed = this.handleCardPressed.bind(this)
    this.handleWorkPageClosed = this.handleWorkPageClosed.bind(this)
  }

  componentWillMount(){
    this.setState({
      animateHome: true,
      visibleProject: null,
    })
  }

  render() {
    return this.state.visibleProject ?
              this.renderProject(this.state.visibleProject) :
              this.renderHome()
  }

  renderHome(){
    return (
      <div>
        <Header shouldAnimate={this.state.shouldAnimateHome} />
        <Portfolio shouldAnimate={this.state.shouldAnimateHome} onCardPressed={this.handleCardPressed}/>
        <Adventures shouldAnimate={this.state.shouldAnimateHome} />
        <Contact shouldAnimate={this.state.shouldAnimateHome} />
      </div>
    )
  }

  renderProject(project){
    switch(project) {
      case 'territory-brand':
        return <TerritoryLaunch onClosePressed={this.handleWorkPageClosed}/>
        break;
      case 'ps-expansion':
        return <PSExpansion onClosePressed={this.handleWorkPageClosed}/>
        break;
      case 'apk-brand':
        return <AmericanParkourLaunch onClosePressed={this.handleWorkPageClosed}/>
        break;
    }
  }

  handleCardPressed(project){
    console.log("Card pressed for project: ", project)
    this.setState({
      visibleProject: project
    })
  }

  handleWorkPageClosed(){
    this.setState({
      shouldAnimateHome: false,
      visibleProject: null
    })
  }

}
