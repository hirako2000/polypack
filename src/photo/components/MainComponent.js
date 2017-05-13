import Inferno from 'inferno'
import Component from 'inferno-component'
import FooterComponent from './FooterComponent'
import TopHeaderComponent from './TopHeaderComponent'
import BlobComponent from './BlobComponent'
import HeaderComponent from './HeaderComponent'

class MainComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <TopHeaderComponent/>
        <div className="container">
          <HeaderComponent store={this.props.store}/>
          <BlobComponent store={this.props.store}/>
        </div>
        <FooterComponent/>
      </div>)
  }
}

export default MainComponent
