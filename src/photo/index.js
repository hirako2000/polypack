import 'mincss-modules/less/buttons.less'
import 'mincss-modules/less/grid.less'
import 'mincss-modules/less/icons.less'
import 'mincss-modules/less/navbar.less'
import 'mincss-modules/less/tables.less'
import 'mincss-modules/less/forms.less'
import './styles/styles.less'
import './img/logo.svg'

import Inferno from 'inferno'
import { Provider } from 'inferno-redux'
import { createStore } from 'redux'

import MainComponent from './components/MainComponent'

import fetch from './tvmaze.js'

const store = createStore(function(state, action) {
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
      <MainComponent store={store} />
    </Provider>,
    document.getElementById("app")
  )
