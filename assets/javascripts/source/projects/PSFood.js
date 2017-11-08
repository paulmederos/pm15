import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyPage from '../CaseStudyPage'
import CaseStudyFigure from '../CaseStudyFigure'
import Shot from '../Shot'

export default class PSFood extends React.Component {
  render() {
    return (
      <CaseStudyPage
        companyName={"Power Supply"}
        projectTitle={"Menu Personalization"}
        onClosePressed={this.props.onClosePressed}
      >
        <header className="project-page-header ps-food">
          <div className="wrap" style={{marginBottom: "2em"}}>
            <img src="assets/images/header-ps-food.png" />
          </div>
        </header>

        <div className="wrap mid-wrap">
          <h2 className="project-title">
            Finding foods that fit for serious retention
          </h2>

          <p className="mini-study-notice">
            <i>This is a <b>mini-study™️.</b><br />Longer write-up incoming, but use this to get a gist of my work.</i>
          </p>

          <p>
            Power Supply helped fuel active folks with tasty,
            good-for-them food by working with local chefs to
            prepare and deliver meal plans. We were the "easy button"
            for people who wanted to eat Paleo or Vegetarian,
            without the hassle of meal prepping, shopping, or
            cooking.
          </p>

          <h3>The Setup</h3>

          <p>
            Power Supply started with minimal choice. You picked a plan and a drop-off point, and your food box was delivered. No customizing, no picking prefs,
            no letting us know what you like, no changing sizes, zip zero zilch.
          </p>

          <p>
            Part of this was intentional: no choice = less stress, less thinking, more getting. It was also
            infinitely easier on the culinary production and logistics side. But we heard over and over again that customers wanted more control.
          </p>

          <h3>The Challenge</h3>

          <p>
            We couldn't afford to roll out a bunch of stuff that didn't work. We didn't have the money, the people, or the time to do that.
            We needed to learn what customers <i>really</i> wanted, as quickly as possible. One of our biggest fears
            was that introducing more choice would add too much complexity, too much thinking, too much stress for our customers.
          </p>
          <p>Our goal was to introduce tiny, incremental amounts of choice, over time, to learn what really resonated with customers (growth!), and to help our logistics team stay as lean as possible.</p>

          <h3>The Team</h3>

          <p>
            We were in tiny startup mode. The company was less than 8 folks. It was me and an engineer on the product side. I was responsible for the customer UX and full-stack engineering.
          </p>

          <h3>The Process</h3>
          <h4>I started with listening.</h4>
          <p>
            I worked closely with the co-founders to learn what they thought
            the most vital pain points were for customers, and the constraints
            we had around food ops. I parsed hundreds of messages from customers
            to get a sense for their needs. I interviewed a few via email and phone
            to learn about their situations, motiations, and desired outcomes. I
            spent quality time with our software engineer to learn about technical constraints.
          </p>

          <h4>I synthesized and structured the challenges.</h4>
          <p>
            I echoed back what I was hearing.
            I tried to understand the different pushes and pulls. I drew quick sketches,
            quick charts, quick summaries to make sure the concepts in my mind
            were the same concepts in others' minds. Keep it simple; fear of choice overload;
            enough customization but not too much; keep ops changes minimal;
          </p>

          <h4>I communicated my plan with stakeholders.</h4>
          <p>
            I worked with teammates
            to put together the approach (quick tests, minimal changes, listen and react),
            the starting point, and what the next steps could be.
          </p>

          <h4>I brought the team along with me.</h4>
          <p>
            I started generating: mapping flows,
            sketching possible paths, exploring visual designs and interactions, and protoyping.
            I designed openly, posting often to Slack, and summarizing different decisions
            along the way, inviting others to collaborate with me. I showed early (embarrassing) work
            to customers to see if I was on the right path.
          </p>

          <h4>I made decisions quickly, and left space for learning.</h4>
          <p>
            We started building. I made design direction decisions quickly, and let folks know
            these decisions could (and should) be re-evaluated after testing. This helped
            us move very quickly, gaining momentum often.
          </p>

          <h4>I shared findings—and lessons learned—often.</h4>
          <p>
            As soon as designs were shipped,
            I'd pay attention to feedback and analytics. Whatever I learned, I'd share
            with the team. It helped us understand what was working and what wasn't, so
            we could keep pushing forward.
          </p>

          <h3>Key Results</h3>
          <p>
            Surprise: 📈 retention went up. We learned that folks who enjoyed their meals,
            were more likely to stick around, and that by making it easier
            to find meals they loved (e.g. customizing their menu), we
            could increase the odds they'd stick around longer.
          </p>
          <p>
            Conversion increased. We were able to successfuly navigate the fine-line between too little and too much choice.
            Folks who wanted an "easy button" could set and forget.
            Folks who wanted more control could easily tweak their orders.
          </p>
          <p>
            Product experience changes led to dramatic, foundational
            "back of the house" systems for our culinary ops,
            named "The Garden", where ops managed everything from
            meal recipes to deliveries logistics.
          </p>
          <p>
            We devised basic processes around product development, and a
            close working relationship between product, design, and engineering.
            This came in the form of shared tooling, shared language, and a collaborative
            process where we were all bought-in to the direction, so we could move quickly.
          </p>

          <hr />

          <CaseStudyFigure
            imageUrl={"assets/images/studies/psf-beforeafter-menu.png"}
            altText={``}
            subText={`Prevoiusly, the menu was bare-bones: a title and brief description. Afterwards: the menu was easier to navigate, with plenty of helpers so folks could find meals they might love.`}
          />

          <CaseStudyFigure
            imageUrl={"assets/images/studies/psf-beforeafter-modder.png"}
            altText={``}
            subText={`Previously, customizing your meals was an ordeal and difficult to navigate. Afterwards: an easily scannable list, easy to know what you had and how to change it.`}
          />

          <CaseStudyFigure
            imageUrl={"assets/images/studies/psf-beforeafter-timeline.png"}
            altText={``}
            subText={`Previously, it was terribly confusing to find out what meals you were getting. You had to cross-reference your receipt for a plan, and find the menu blog post to see what you'd get. Afterwards: a convenient timeline should you upcoming deliveries.`}
          />
        </div>
      </CaseStudyPage>
    )
  }

}
