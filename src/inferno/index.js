import Inferno from 'inferno'
import WelcomeComponent from './components/WelcomeComponent'
import NetflixComponent from './components/NetflixComponent'
import 'furtive/css/furtive.css'


const message = "Furtive"

Inferno.render(
  <div>
    <WelcomeComponent message={ message } />
  </div>,
  document.getElementById("app")
)
