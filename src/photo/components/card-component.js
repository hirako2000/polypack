import Inferno from 'inferno'
import Component from 'inferno-component'

class CardComponent extends Component {
  componentDidMount() {
  }

  prettyText(show) {
    let summary = show.summary ? show.summary : show.show.summary
    summary = summary.replace(/(<([^>]+)>)/ig, '')
    if (summary.length > 200) {
      summary = summary.substring(0, 200) + '...'
    }
    return summary
  }

  render() {
    const show = this.props.show
    const genres = []
    if (show.show.genres && show.show.genres.length > 0) {
      for (let i = 0; i < show.show.genres.length; i++) {
        genres.push(<span>{show.show.genres[i]}</span>)
        if (i < show.show.genres.length - 1) {
          genres.push(<span> | </span>)
        }
      }
    }
    const imageCount = this.props.imageCount
    let imageStyles = 'fit-image'
    imageStyles = imageCount === 1 ? imageStyles += ' front-image' : imageCount === 2 ? imageStyles += ' two-image' : imageStyles += ' three-image'
    return (
      <div className="gutter-content">
        <img className={imageStyles} src={show.image ? show.image.original : show.show.image.original}/>
        <div className="movie-title pt14 pb8">
          {show.show.name} - Season {show.season} Ep {show.number}
          <span className="airtime">
            {show.airtime}
          </span>
          <div className="genres">
            {genres}
          </div>
        </div>

        <div className="movie-tagline">
          {show.name}
        </div>
        <div className="movie-description">
          { this.prettyText(show) }
        </div>
        <div className="genres">
          <span >
            { show.show.network.name }
          </span>
          <span className="float-right">
           Rating: { show.show.rating.average }
          </span>
        </div>
        <a className="find-out" href="#">
          Find out more
        </a>
      </div>
    )
  }
}

export default CardComponent
