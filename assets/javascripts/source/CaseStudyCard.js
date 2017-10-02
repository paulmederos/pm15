import React from 'react'
import PropTypes from 'prop-types'

export default class CaseStudyCard extends React.Component {
  render() {
    return (
      <li className="adventure-preview full-screen-adventure">
        <figure className={`adventure-image ${this.props.projectHeaderClass}`}></figure>
        <section className="adventure-content">
          <h5>{this.props.date} &middot; {this.props.role}</h5>
          <h3>{this.props.projectTitle}</h3>
          <p>{this.props.description}</p>

          <a href="#" onClick={this.props.onCardPressed}>Learn about the work &rarr;</a>
        </section>
      </li>
    )
  }
}

CaseStudyCard.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  role: PropTypes.string,
  projectHeaderClass: PropTypes.string,
  projectTitle: PropTypes.string,
  onCardPressed: PropTypes.func,
}
