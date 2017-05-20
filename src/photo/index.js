import Inferno from 'inferno'
import {Provider} from 'inferno-redux'
import {createStore} from 'redux'
import * as buttons from 'mincss-modules/less/buttons.less'
import * as grid from 'mincss-modules/less/grid.less'
import * as icons from 'mincss-modules/less/icons.less'
import * as navbar from 'mincss-modules/less/navbar.less'
import * as tables from 'mincss-modules/less/tables.less'
import * as forms from 'mincss-modules/less/forms.less'
import * as styles from './styles/styles.less'
import * as logo from './img/logo.svg'
import MainComponent from './components/main-component'

const store = createStore((state, action) => {
  switch (action.type) {
    case 'SHOWS':
      return {
        shows: action.name
      }
    default:
      return {
        shows: null
      }
  }
})

Inferno.render(
  <Provider store={store}>
    <MainComponent store={store}/>
  </Provider>, document.getElementById('app')
)

export {buttons, grid, icons, navbar, tables, forms, styles, logo}
