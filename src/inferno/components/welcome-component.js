import Component from 'inferno-component'

export default class WelcomeComponent extends Component {
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
