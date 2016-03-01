import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStrore from '../store/configureStore'
import App from './App'
import DevTools from './DevTools'

const store = configureStrore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <App />
          <DevTools />
        </div>
      </Provider>
    )
  }
}
