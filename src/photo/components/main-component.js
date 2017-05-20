import Inferno from 'inferno'
import Component from 'inferno-component'
import FooterComponent from './footer-component'
import TopHeaderComponent from './top-header-component'
import BlobComponent from './blob-component'
import HeaderComponent from './header-component'

class MainComponent extends Component {
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
