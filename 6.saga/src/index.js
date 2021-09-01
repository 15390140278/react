import React from 'react'
import ReactDom from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import Login from './components/Login'

ReactDom.render(
  <>
    <Provider store={store}>
      <Counter />
    </Provider>
  </>,
  document.getElementById('root')
)
