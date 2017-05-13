import Inferno from 'inferno'
import Component,  { linkEvent } from 'inferno-component'
import fetch from '../tvmaze.js'
import orderBy from 'lodash/orderBy'

class FooterComponent extends Component {
  constructor(props) {
    super(props)
  }

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
