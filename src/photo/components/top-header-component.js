import Component from 'inferno-component'
import Inferno from 'inferno'

class TopHeaderComponent extends Component {
  render() {
    return (
      <nav className="nav-top" tabIndex="-1">
        <div className="right-menu">
          <a href="#">Search</a>
          <a href="#">About</a>
        </div>
      </nav>
    )
  }
}

export default TopHeaderComponent
