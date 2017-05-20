import Inferno from 'inferno'
import * as furtive from 'furtive/css/furtive.css'
import * as styles from './styles/stylesheet.css'
import WelcomeComponent from './components/welcome-component'

const message = 'Furtive'
Inferno.render(
  <div>
    <div className="row header"/>
    <WelcomeComponent message={message}/>
  </div>,
  document.getElementById('app')
)

export {furtive, styles}
