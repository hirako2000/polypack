import Inferno from 'inferno'
import Component from 'inferno-component'

class FooterComponent extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="large-footer">
          <div classclassName="row row-gutter">
            <div className="col c12">
              <div className="row">
                <a className="that-yellow" href="https://github.com/hirako2000/polypack">Source on Github</a>
              </div>
            </div>
          </div>
        </div>
        <div className="very-footer">
          ©2017 Some Rights Reserved. Schedules retreived from <a href="http://www.tvmaze.com/">TVmaze</a>. This website may contain mature content.
        </div>
      </div>
    )
  }
}

export default FooterComponent
