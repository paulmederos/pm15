import React from 'react'

export default class Portfolio extends React.Component {
  render() {
    return (
      <section className="adventures animated animated-mid fadeInUp">
        <div className="wrap">
          <h2>Work Portfolio</h2>
          <p>
            In my decade+ of professional experience, I’ve applied my CS/HCI,
            entrepreneurship, and design backgrounds to solving real problems
            for people and businesses. Feel free to explore a few recent highlights:
          </p>
        </div>

        <div className="stack-container">
          <ul className="stack-of-adventures">

            <li className="adventure-preview full-screen-adventure">
              <figure className="adventure-image territory"></figure>
              <section className="adventure-content">
                <h5>2017 &middot; Design Lead</h5>
                <h3>Territory Foods</h3>
                <p>We help people make better choices about their foods so they can do more of what they love. Ask me about:</p>

                <a href="/territory-brand-launch">Learn about the work &rarr;</a>
              </section>
            </li>

            <li className="adventure-preview">
              <figure className="adventure-image ux-book"></figure>
              <section className="adventure-content">
                <h5>2015 &middot; Co-creator</h5>
                <h3>Crafting Your UX Portfolio</h3>
                <p>A step-by-step guide to finding your next job as a UX designer. Ask me about:</p>
                <ul style={{marginBottm: "2em"}}>
                  <li>Interviewing for signal</li>
                  <li>Letting your audience drive</li>
                  <li>Designing a payment system</li>
                  <li>Closing out a product</li>
                </ul>
                <a href="http://portfolio.enchant.co">Start reading &rarr;</a>
              </section>
            </li>

            <li className="adventure-preview">
              <figure className="adventure-image kale"></figure>
              <section className="adventure-content">
                <h5>2011 &middot; Maker</h5>
                <h3>Kale</h3>
                <p>Listen to the wisdom of your body by journaling your meals to find foods that feel great. Ask me about:</p>
                <ul style={{marginBottm: "2em"}}>
                  <li>Concept &rarr; first $$ collected</li>
                  <li>Targeting health professionals</li>
                  <li>Prototyping on iOS</li>
                </ul>
                <a href="http://getkale.com">Start tracking your food &rarr;</a>
              </section>
            </li>

            <li className="adventure-preview">
              <figure className="adventure-image apk"></figure>
              <section className="adventure-content">
                <h5>2013 &middot; UX Lead</h5>
                <h3>American Parkour</h3>
                <p>Inspiring folks to go outside and enjoy fun movement with a community of amazing traceurs. Ask me about:</p>
                <ul style={{marginBottm: "2em"}}>
                  <li>Ecommerce vs digital products</li>
                  <li>Supporting a global community</li>
                  <li>Applying service design to gyms</li>
                </ul>
                <a href="http://americanparkour.com">Start learning parkour now &rarr;</a>
              </section>
            </li>

            <li className="adventure-preview">
              <figure className="adventure-image seishin"></figure>
              <section className="adventure-content">
                <h5>2017 &middot; Maker</h5>
                <h3>Seishin</h3>
                <p>Reflect on interesting sayings to reclaim a moment of mindfulness. Ask me about:</p>
                <ul style={{marginBottm: "2em"}}>
                  <li>Rapid mobile prototyping</li>
                  <li>Scratching your own itch</li>
                </ul>
                <a href="https://itunes.apple.com/us/app/seishin/id1251924334?mt=8">Get it on the iOS app store &rarr;</a>
              </section>
            </li>

            <li className="adventure-preview">
              <figure className="adventure-image designers-hearth"></figure>
              <section className="adventure-content">
                <h5>2012 &middot; Organizer</h5>
                <h3>Designer's Hearth</h3>
                <p>A local Meetup group in the SF Bay Area, for designers to meet + get to know each other outside of work. Ask me about:</p>
                <ul style={{marginBottm: "2em"}}>
                  <li>Keys to growing a community</li>
                  <li>Copywriting impacts attendance</li>
                </ul>
                <a href="http://mv.designershearth.com/">Come say hi over coffee &rarr;</a>
              </section>
            </li>

          </ul>
        </div>
        <figure className="cool-blobs"></figure>
      </section>
    )
  }

}
