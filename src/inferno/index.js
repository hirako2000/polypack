import Inferno from 'inferno'
import WelcomeComponent from './components/WelcomeComponent'
import 'furtive/css/furtive.css'
import './styles/stylesheet.css'
const message = "Furtive"

Inferno.render(
  <div>
    <div className="row header">
    </div>
    <WelcomeComponent message={message}/>
  </div>,
  document.getElementById("app")
)
