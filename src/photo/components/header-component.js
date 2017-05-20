import Inferno from 'inferno'
import Component from 'inferno-component'
import {connect} from 'inferno-redux'
import orderBy from 'lodash/orderBy'
import fetch from '../tvmaze'

const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
  }

  componentWillMount() {
    const date = new Date()
    this.setState({
      today: date.getDay(),
      day: date.getDay()
    })
  }

  handleClick(day) {
    this.setState({day})
    this.fetchShows()
  }

  fetchShows() {
    const thiz = this
    let shift = 0
    if (this.state.day !== this.state.today) {
      if (this.state.day - this.state.today < 0) {
        shift = 7 + (this.state.day - this.state.today)
      } else {
        shift = this.state.day - this.state.today
      }
    }
    thiz.props.store.dispatch({
      type: 'SHOWS',
      name: null
    })
    fetch(shift)
      .then(response => {
        const sortedShows = orderBy(response, [o => {
          return o.show.weight && o.show.rating.average > 0 ? o.show.weight : 0
        }, o => {
          return o.show.rating.average > 0 ? o.show.rating.average : 0
        }], ['desc', 'desc'])

        thiz.props.store.dispatch({
          type: 'SHOWS',
          name: sortedShows
        })
      }).catch(err => {
        console.log('Error: ' + err)
      })
  }

  render() {
    const days = []
    for (let i = 0; i < DAYS.length; i++) {
      const thisDay = DAYS[i]
      const thisDayNum = i
      days.push(
        <a
          className={this.state.day === thisDayNum ? 'underline' : 'no'} href="#"
          onClick={
            function () {
              this.handleClick(thisDayNum)
            }
          }
          >
          {thisDay}
        </a>
      )
    }

    return (
      <nav className="py16">
        <span><a className="logo"/></span>
        <span className="nav-main">
          {days}
        </span>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  shows: state.shows
})

export default connect(mapStateToProps)(HeaderComponent)
