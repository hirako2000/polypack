import Inferno from 'inferno'
import Component,  { linkEvent } from 'inferno-component'
import { Provider, connect } from 'inferno-redux'
import { bindActionCreators } from 'redux'
import fetch from '../tvmaze.js'
import orderBy from 'lodash/orderBy'

const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY' , 'FRIDAY', 'SATURDAY']

class HeaderComponent extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  componentWillMount() {
    var date = new Date()
    this.setState({
      today: date.getDay(),
      day: date.getDay()
    });
  }

  handleClick(day) {
    this.setState({ day: day });
    this.fetchShows()
  }

  fetchShows() {
    var thiz = this
    var date = new Date();
    let shift = 0;
    if(this.state.day != this.state.today) {
      if (this.state.day - this.state.today < 0) {
        shift = 7 + (this.state.day - this.state.today)
      } else {
        shift = this.state.day - this.state.today
      }
    }
    thiz.props.store.dispatch({
      type: 'SHOWS',
      name: null
    });
    fetch(shift)
      .then(function(response) {
        //var sortedShows = orderBy(response,  [function(o) { return o.show.rating.average && o.show.rating.average < 10 && o.image && o.image.original ? o.show.rating.average : 0 }], ['desc']);
        var sortedShows = orderBy(response,  [function(o) { return o.show.weight && o.show.rating.average > 0  ? o.show.weight : 0 }, function(o) { return o.show.rating.average > 0 ? o.show.rating.average : 0 }], ['desc', 'desc']);

        thiz.props.store.dispatch({
          type: 'SHOWS',
          name: sortedShows
        });

      }).catch(function(error) {
        console.log("Error: " + error)
      })
  }

  render() {
    var days = [];
    for (var i=0; i < DAYS.length; i++) {
      let thisDay = DAYS[i]
      let thisDayNum = i
      days.push(
        <a className={this.state.day === thisDayNum ? 'underline' : 'no'} href="#" onClick={ (day) => { this.handleClick(thisDayNum) } }>
          {thisDay}
        </a>
      )
    }

    return (
      <nav className="py16">
          <span><a className="logo"></a></span>
          <span className="nav-main">
            {days}
          </span>
      </nav>
      )
  }
}

const mapStateToProps = (state) => ({
  shows: state.shows
});

export default connect(mapStateToProps)(HeaderComponent);
