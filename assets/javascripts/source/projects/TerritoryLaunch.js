import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyPage from '../CaseStudyPage'

export default class TerritoryLaunch extends React.Component {
  render() {
    return (
      <CaseStudyPage
        companyName={"Territory Foods"}
        projectTitle={"Brand Launch"}
        onClosePressed={this.props.onClosePressed}
      >
        <div className="wrap mid-wrap">
          <h2>Our customers were outgrowing our brand, so we stepped it up.</h2>
          <p>I’m currently helping fuel people who eat with purpose over at
            Territory Foods, where I lead product design. My team’s most recent
            project involved a simultaneous product launch and rebrand that helps
            us serve our customers so much better than ever before.</p>
          <h4>Images</h4>
          <p>More content</p>
        </div>
      </CaseStudyPage>
    )
  }

}
