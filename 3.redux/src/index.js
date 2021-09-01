/*
 * @Author: your name
 * @Date: 2021-06-08 17:08:59
 * @LastEditTime: 2021-06-10 20:57:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \3.redux\src\index.js
 */
import React from 'react'
import ReactDom from 'react-dom'
import Counter from './components/Counter'
// import { Provider } from './react-redux'
import { Provider } from 'react-redux'

import store from './store'

ReactDom.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)
