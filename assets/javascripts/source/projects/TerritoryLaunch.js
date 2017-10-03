import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyPage from '../CaseStudyPage'
import Shot from '../Shot'

export default class TerritoryLaunch extends React.Component {
  render() {
    return (
      <CaseStudyPage
        companyName={"Territory Foods"}
        projectTitle={"Brand Launch"}
        onClosePressed={this.props.onClosePressed}
      >
        <header className="project-page-header territory">
          <div className="wrap" style={{marginBottom: "2em"}}>
            <img src="assets/images/header-territory-brand.png" />
          </div>
        </header>

        <div className="wrap mid-wrap">
          <h2>Our customers were outgrowing our brand, so we stepped it up.</h2>
          <p>I’m currently helping fuel people who eat with purpose over at
            Territory Foods, where I lead product design. My team’s most recent
            project involved a simultaneous product launch and rebrand that helps
            us serve our customers so much better than ever before.</p>
        </div>

        <h3 className="carousel-title">Process / source shots</h3>
        <div className="carousel-wrap">
          <ul className="carousel-container wip-shots" style={{ width: "2580px "}}>
            <li><Shot fileName={"territory-wip-01"} /></li>
            <li><Shot fileName={"territory-wip-02"} /></li>
            <li><Shot fileName={"territory-wip-03"} /></li>
            <li><Shot fileName={"territory-wip-04"} /></li>
            <li><Shot fileName={"territory-wip-05"} /></li>
            <li><Shot fileName={"territory-wip-06"} /></li>
          </ul>
        </div>

        <h3 className="carousel-title">Product shots</h3>
        <div className="carousel-wrap">
          <ul className="carousel-container product-shots" style={{ width: "1780px "}}>
            <li><Shot fileName={"territory-product-01"} /> </li>
            <li><Shot fileName={"territory-product-02"} /></li>
            <li><Shot fileName={"territory-product-03"} /></li>
            <li><Shot fileName={"territory-product-04"} /></li>
            <li><Shot fileName={"territory-product-05"} /></li>
            <li><Shot fileName={"territory-product-06"} /></li>
          </ul>
        </div>

        <div className="wrap mid-wrap" style={{marginTop: "4em"}}>
          <h3>Goals</h3>
          <p>I’m currently helping fuel people who eat with purpose over at
            Territory Foods, where I lead product design. My team’s most recent
            project involved a simultaneous product launch and rebrand that helps
            us serve our customers so much better than ever before.</p>

          <h3>Team</h3>
          <p>I’m currently helping fuel people who eat with purpose over at
            Territory Foods, where I lead product design. My team’s most recent
            project involved a simultaneous product launch and rebrand that helps
            us serve our customers so much better than ever before.</p>

          <h3>Results</h3>
          <p>I’m currently helping fuel people who eat with purpose over at
            Territory Foods, where I lead product design. My team’s most recent
            project involved a simultaneous product launch and rebrand that helps
            us serve our customers so much better than ever before.</p>
        </div>

      </CaseStudyPage>
    )
  }

}
