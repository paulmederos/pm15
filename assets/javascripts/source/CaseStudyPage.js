import React from 'react'
import PropTypes from 'prop-types'

export default class CaseStudyPage extends React.Component {

  componentWillMount(){
    document.body.className = "opened"
  }

  componentWillUnmount(){
    document.body.className = ""
  }

  render() {
    const { companyName, projectTitle } = this.props

    return (
      <div className="project-container">
        <main className="project-page">
          <nav className="project-nav">
            <button className="fab fab-back" onClick={this.props.onClosePressed} />
            <p className="project-meta"><b>{companyName}</b> - {projectTitle}</p>
          </nav>

          <section className="project-content">
            { this.props.children }
          </section>

          <footer className="wrap mid-wrap project-footer">
            <button onClick={this.props.onClosePressed}>&larr; Back to the rest of the work</button>
          </footer>
        </main>
        <aside className="overlay"></aside>
    </div>
    )
  }

}

CaseStudyPage.propTypes = {
  companyName: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  onClosePressed: PropTypes.func.isRequired,
}
