import React from 'react'

import Header from './Header'
import Portfolio from './Portfolio'
import Contact from './Contact'

import TerritoryLaunch from './projects/TerritoryLaunch'

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
      visibleProject: 'territory-brand'
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
        <Contact shouldAnimate={this.state.shouldAnimateHome} />
      </div>
    )
  }

  renderProject(project){
    switch(project) {
      case 'territory-brand':
        return <TerritoryLaunch onClosePressed={this.handleWorkPageClosed}/>
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
