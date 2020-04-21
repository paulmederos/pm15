import React from 'react'
import PropTypes from 'prop-types'

export default class Header extends React.Component {
  render() {
    return (
      <header className={`wrap title ${this.props.shouldAnimate && "animated fadeIn"}`}>
        <div className="headshots-container">
          <img src="assets/images/headshot-01.jpg" className="headshot first" />
          <img src="assets/images/headshot-02.jpg" className="headshot second" />
          <img src="assets/images/headshot-03.jpg" className="headshot third" />
        </div>

        <h2>Paul Mederos</h2>
        <p>
          Builds teams that make meaningful products<br />
          &amp; services centered around human experiences.
        </p>

        <ol className="brief-resume">
          <li>
            <span className="time-space-continuum">2019 - Present</span>
            <span className="the-gig">🌊 Building <a href="https://www.weareflorens.com" target="_blank">Florens</a> — a place to unwind + recover</span>
          </li>
          <li>
            <span className="time-space-continuum">2016 - Present</span>
            <span className="the-gig">🚀 Running <a href="https://www.enchant.co" target="_blank">Enchant</a> — a product studio for purpose-driven orgs</span>
          </li>
          <li>
            <span className="time-space-continuum">2014 - 2018</span>
            <span className="the-gig">🥗 Product + engineering at <a href="https://www.territoryfoods.com" target="_blank">Territory Foods</a></span>
          </li>
          <li>
            <span className="time-space-continuum">2012 ~ 2013</span>
            <span className="the-gig">🏃‍♀️ Designer + developer at <a href="https://www.linkedin.com/company/cor/about/" target="_blank">Cor</a></span>
          </li>
          <li>
            <span className="time-space-continuum">2006 ~ 2012</span>
            <span className="the-gig">💻 Operated <a href="https://www.linkedin.com/company/prime-enterprise-consulting/" target="_blank">Prime</a> — an IT/software shop for SMBs</span>
          </li>
          <li>
            <span className="time-space-continuum">2005 ~ 2010</span>
            <span className="the-gig"> 🤸‍♀️ Cofounder at <a href="http://www.americanparkour.com" target="_blank">American Parkour</a> - led UX + Tech</span>
          </li>
        </ol>
      </header>
    )
  }
}

Header.propTypes = {
  shouldAnimate: PropTypes.bool
}
