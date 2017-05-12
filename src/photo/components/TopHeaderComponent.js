import Inferno from 'inferno'
import Component from 'inferno-component'

class TopHeaderComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <nav className="nav-top" tabindex="-1">
          <div className="right-menu">
              <a href="#">Search</a>
              <a href="#">About</a>
          </div>
      </nav>
      )
  }
}

export default TopHeaderComponent
