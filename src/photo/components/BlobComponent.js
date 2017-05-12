import Inferno from 'inferno'
import Component from 'inferno-component'
import HeaderComponent from './HeaderComponent'
import CardComponent from './CardComponent'
import { Provider, connect } from 'inferno-redux'

import fetch from '../tvmaze.js'
import orderBy from 'lodash/orderBy'

class BlobComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    var thiz = this
    if(true) {
      console.log("component will mount")
    fetch(0)
      .then(function(response) {
        var sortedShows = orderBy(response,  [function(o) { return o.show.weight && o.show.rating.average > 0  ? o.show.weight : 0 }, function(o) { return o.show.rating.average > 0 ? o.show.rating.average : 0 }], ['desc', 'desc']);

        thiz.setState({
          shows: sortedShows
        });

        thiz.props.store.dispatch({
          type: 'SHOWS',
          name: sortedShows
        });

      }).catch(function(error) {
        console.log("Error: " + error)
      })
    }
  }

  render() {
    if(!this.props.shows) {
      console.log("No shows yet")
      return (
        <div className="loader">Loading...</div>
      )
    }

    console.log(" shows now")


    return (
      <div className="fade-in">

        <div className="row background-text">
          <div className="col c8">
            <img className="fit-image front-image" src={this.props.shows[0].image ? this.props.shows[0].image.original :this.props.shows[0].show.image.original}/>
          </div>
          <div className="col c4">
            <div className="p16">
              <div className="movie-title margb24">
                {this.props.shows[0].show.name} | Season {this.props.shows[0].season} Ep {this.props.shows[0].number}
              </div>
              <div className="movie-tagline">
                {this.props.shows[0].name}
              </div>
              <div className="movie-description margin-bottom-end">
                { this.props.shows[0].summary ? this.props.shows[0].summary.replace(/(<([^>]+)>)/ig,"") : this.props.shows[0].show.summary.replace(/(<([^>]+)>)/ig,"") }
              </div>
              <a className="find-out" href="#">
                Find out more
              </a>
            </div>
          </div>
        </div>
        <div className="row row-gutter my25em">
          <div className="col c6">
            <CardComponent show={this.props.shows[1]} imageCount={2} />
          </div>
          <div className="col c6">
            <CardComponent show={this.props.shows[2]} imageCount={2} />
          </div>
        </div>

      <div className="row row-gutter my25em">
        <div className="col c4">
          <CardComponent show={this.props.shows[3]} imageCount={3} />
        </div>
        <div className="col c4">
          <CardComponent show={this.props.shows[4]} imageCount={3} />
        </div>
        <div className="col c4">
          <CardComponent show={this.props.shows[5]} imageCount={3} />
        </div>
      </div>
      <div className="row row-gutter my25em">
        <div className="col c4">
          <CardComponent show={this.props.shows[6]} imageCount={3} />
        </div>
        <div className="col c4">
          <CardComponent show={this.props.shows[7]} imageCount={3} />
        </div>
        <div className="col c4">
          <CardComponent show={this.props.shows[8]} imageCount={3} />
        </div>
      </div>
    </div>

      )
  }
}

const mapStateToProps = (state) => ({
  shows: state.shows
});

export default connect(mapStateToProps)(BlobComponent);
