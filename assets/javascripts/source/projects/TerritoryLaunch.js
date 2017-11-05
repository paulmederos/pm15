import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyPage from '../CaseStudyPage'
import Shot from '../Shot'

export default class TerritoryLaunch extends React.Component {
  render() {
    return (
      <CaseStudyPage
        companyName={"Territory Foods"}
        projectTitle={"Product + Brand Launch"}
        onClosePressed={this.props.onClosePressed}
      >
        <header className="project-page-header territory">
          <div className="wrap" style={{marginBottom: "2em"}}>
            <img src="assets/images/header-territory-brand.png" />
          </div>
        </header>

        <div className="wrap mid-wrap">
          <h2>Rebuilding our brand from the ground up</h2>
          <p>
            The Power Supply brand was tailored to a performance-oriented,
            CrossFit and Paleo loving customer. As our business grew, we
            learned that there was an opportunity to position our brand beyond
            Power Supply's performance-oriented folks.
          </p>

          <p>
            We were attracting active, health-conscious achievers who were
            constantly seeking adventure; folks who saw health as a holistic
            practice, each their own paths to wellness.  It was time to set
            ourselves up for a future focused on personalized nutrition.
            Enter Territory.
          </p>

          <hr />

          <h3>Objectives</h3>
          <p>We kicked-off the project with 3 goals:</p>

          <h4>#1 Open our brand to a broader audience of “life optimizers.”</h4>
          <p>
            User research was the primary driver behind the rebrand. As we continued
            to serve more folks, we caught new patterns from our customers: different
            situations, motivations, and desired outcomes that brought them to us.
            We took a much closer look at our customers and found a huge opportunity
            to align our message more strongly:
          </p>
          <figure class="image-container">
            <img src="https://paper.dropbox.com/ep/redirect/image?url=https%3A%2F%2Fd2mxuefqeaa7sj.cloudfront.net%2Fs_1DF04879788A802617D5CC0B8C7DBE1053885053373259749B5283BCA5A1FDA8_1507568693577_Brand%2BOpportunity.png&hmac=T6PYp6YM2q89WTGvw2Pq48XT%2B7FqgzJoqY8hX0XFS1U%3D" />
            <p class="image-subtext">
              Power Supply's brand was focused on the "performance-oriented + active"
              crowd. Through deep user research we learned we were also serving
              so many other folks really well—we just needed a message to match.
            </p>
          </figure>

          <h4>#2 Elevate the perception of quality with the brand</h4>
          <p>
            Our brand didn’t reflect the culinary masterpieces produced by our chefs.
            Our network of independent chefs use the best ingredients to bring out
            amazing flavors… and that variety is one of the secret sauces to our
            business (go figure: if you make amazingly tasty food, people will keep coming back.)
          </p>
          <p>
            Even though customers consistently raved about the food, they were
            less enthusiastic about the lead-up experience. They were led to
            expect something more akin to “take-out” food or “healthy” food
            that wasn’t supposed to be this good. In a way, we set a low
            expectation, and then blew them away… but we knew we’d be more
            attractive up front if we did our food justice.
          </p>

          <h4>#3 Launch quickly enough to take advantage of growth initiatives.</h4>
          <p>
            Our mission is to help everyone make better choices about the food they
            eat, so they can spend more time doing the stuff that matters to them.
            We want to reach a lot of people, so setting ourselves up for growth
            initiatives was an important objective.
          </p>
          <p>
            We kicked off the project at the end of 2016, and we had ambitious
            goals for 2017 that relied on a more inclusive brand + product
            offering. That meant we gave ourselves a super quick turnaround
            time: 3-to-6 months… we wanted to launch the rebrand by Q2 2017.
          </p>

          <hr />


          <h3>Team & my role</h3>
          <p>
            Our customer journey spans so many different touch-points,
            both physical and digital. Bringing a rebrand to life meant
            considering the customer experience across that entire journey.
            That meant we needed to pull together teammates from every
            discipline:
          </p>
          <ul>
            <li>
              Our CMO Robert lead the charge, supported by our CEO Patrick,
              COO Jeff, and myself.
            </li>
            <li>
              Our in-house design team (Trisha, Susie, Erin, Chris) spanning
              brand experience, print, copywriting, and UX.
            </li>
            <li>
              A special team (the "Branditos") of cross-org folks: culinary,
              logistics, sales, people ops, etc. to make sure we’ve covered all
              touch-points along the CX, and for our partners (e.g. chefs)
            </li>
            <li>
              Our product + engineering team
            </li>
          </ul>
          <p>We also worked with external stakeholders throughout the initiatve:</p>
          <ul>

            <li><a href="http://www.brandintersection.com/" target="_blank">Brand Intersection Group</a> conducted the earlier customer + brand research. We worked with a small team of 2–4 folks.</li>
            <li><a href="https://redantler.com/" target="_blank">Red Antler</a> helped us piece together our brand strategy based on the research, then execute on the rebrand (from naming to style guides.) We worked with a mid-sized team of 8–10 folks.</li>
          </ul>
          <p>
            I played a pivotal role as <b>Head of Design</b> throughout the
            initiative. I worked closely with our exec team, brand partners,
            and our product teams to help define the brand strategy, and
            then bring the brand to life by executing details. I brought
            my deep understanding of customer needs, product vision, and
            technical constraints to make sure we built something great
            for our customers, that also exceeded our goals and met
            our deadlines.
          </p>
          <p>
            Near the beginning of the process, I spent most of my time
            working with our stakeholders and partners to define the
            brand and coordinate the execution. One of my important contributions
            here was streamlining the feedback/synthesis cycle so we could
            move super fast on multiple fronts, while keeping important
            folks in the loop.
          </p>
          <p>
            As the project peaked, I spent most of my time in-the-trenches,
            iterating on designs and shipping code. One of my important contributions
            here was making decisions about the difficult trade-offs
            on what we needed for launch, vs the bits we could iron out later.
          </p>

          <hr />

          <h3>Key Results</h3>
          <ul>
            <li>We hit all 3 goals: we opened up our brand to “life optimizers”, elevated perception of the culinary quality (look at the <a href="https://www.territoryfoods.com/menus/?geo=LA" target="_blank">gorgeous meal photos</a> we lined up!), and launched by the end of Q2 to set us up for our growth initiatives.</li>
            <li>A successful coordinated rebrand launch, across our entire experience, from physical touch-points (meal label, pickup fridges, brochures) to digital experiences (landing pages, menus, ordering, lifecycle emails, newsletters, ads)</li>
            <li>Strategic partnerships established (e.g. <a href="https://whole30.com/2017/05/whole30-approved-territory/" target="_blank">Whole30</a>, <a href="https://www.medstarhealth.org/mhs/healthy/" target="_blank">Medstar Healthy</a>) to serve new markets</li>
            <li>Positive impact to key metrics (conversion, referral, retention), inc. positive response from customers about new menu offerings—and a huge bump in social sharing</li>
            <li>A flexible, consistent design system (inc. brand style guide, component library, and interaction patterns) across shared tooling (Figma, React library) for much faster + higher quality product development</li>
            <li>Check out the site live here: <a href="https://www.territoryfoods.com?r=KALEYEAH" target="_blank">Territory Foods</a></li>
          </ul>
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

      </CaseStudyPage>
    )
  }

}
