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
    this.setState({ visibleProject: 'territory-brand' })
  }

  render() {
    return (
      <div>
        { this.state.visibleProject && this.renderProject(this.state.visibleProject) }
        <Header />
        <Portfolio onCardPressed={this.handleCardPressed}/>
        <Contact />
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
    this.setState({ visibleProject: null })
  }

}
