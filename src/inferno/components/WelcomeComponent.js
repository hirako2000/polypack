import Inferno from 'inferno'
import Component from 'inferno-component'

class WelcomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Inferno'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.message} - {this.state.name}</h1>
      </div>
    )
  }
}

export default WelcomeComponent
