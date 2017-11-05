import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyCard from './CaseStudyCard'

const listOfAdventures = [
  {
    class: "designers-hearth",
    title: "Designer’s Hearth",
    description: "A local meetup in Silicon Valley for designers to get together to share stories, make frindships, and grow professionally.",
    linkText: "Come say hi over coffee",
    linkURL: "http://mv.designershearth.com/"
  }
]


export default class Adventures extends React.Component {
  render() {
    return (
      <section className={`adventures ${this.props.shouldAnimate && "animated animated-mid fadeInUp"}`}>
        <div className="wrap">
          <h2>Adventures, projects, etc.</h2>
          <p>
            As a self-starter and maker, you’ll always find me
            building something to elevate others. Here are a few
            things I’ve personally made and nurtured on my own time:
          </p>
        </div>

        <div className="stack-container">
          <ul className="stack-of-adventures">
            { listOfAdventures.map( adventure => (
              <li key={adventure.class} className={`adventure-card ${adventure.class}`}>
                <div className="adventure-preview"></div>
                <div className="adventure-content">
                  <h3 className="adventure-title">{adventure.title}</h3>
                  <p className="adventure-description">{adventure.description}</p>
                  <a href={adventure.linkURL} target="_blank">{adventure.linkText} &rarr;</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
}
