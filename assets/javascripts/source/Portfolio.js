import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyCard from './CaseStudyCard'

export default class Portfolio extends React.Component {
  render() {
    return (
      <section className={`adventures ${this.props.shouldAnimate && "animated animated-mid fadeInUp"}`}>
        <div className="wrap">
          <h2>Work Portfolio</h2>
          <p>
            In my decade+ of professional experience, I’ve applied my CS/HCI,
            entrepreneurship, and design backgrounds to solving legit problems
            for people and businesses. Feel free to explore a few recent highlights:
          </p>
        </div>

        <div className="stack-container">
          <ul className="stack-of-adventures">

            <CaseStudyCard
              key={"territory-brand-launch"}
              date={"2017"}
              role={"Design Lead"}
              projectHeaderClass={"territory"}
              projectTitle={"Territory Brand Launch"}
              description={"Our customers were outgrowing our brand, so we stepped it up."}
              onCardPressed={() => this.props.onCardPressed("territory-brand")}
            />

            <CaseStudyCard
              key={"apk-relaunch"}
              date={"2017"}
              role={"UX Lead"}
              projectHeaderClass={"apk"}
              projectTitle={"Community & Store Relaunch"}
              description={"The largest int'l parkour community was ready to level up it's brand."}
              onCardPressed={() => this.props.onCardPressed("apk-brand")}
            />

          </ul>
        </div>
        <figure className="cool-blobs"></figure>
      </section>
    )
  }
}

Portfolio.propTypes = {
  onCardPressed: PropTypes.func.isRequired
}
