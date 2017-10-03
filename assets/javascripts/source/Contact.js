import React from 'react'

export default class Contact extends React.Component {
  render() {
    return (
      <section className={`contact ${this.props.shouldAnimate && "animated animated-mid fadeInUp"}`}>
        <div className="wrap">
          <div className="a-floating-card-maybe-what-do-you-think-this-is-omg">
            <h2>Let's build together ✨</h2>
            <p style={{lineHeight: "1.6"}}>
              Set up a 1:1 time on <a href="https://calendly.com/pvm/30min" target="_blank">Calendly</a> (currently open),
              or send me a DM over on <a href="https://www.twitter.com/pvm" target="_blank">Twitter</a>.
            </p>
          </div>
        </div>

        <footer className="footer-footer-footer">
          <p>Made with &#9829; in California. Check out <a href="http://v14.paulmederos.com/" target="_blank">V14</a>.</p>
        </footer>
      </section>
    )
  }

}
