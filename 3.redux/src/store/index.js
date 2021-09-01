/*
 * @Author: your name
 * @Date: 2021-06-08 21:46:55
 * @LastEditTime: 2021-06-10 21:33:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \3.redux\src\store\index.js
 */
// import { createStore } from 'redux'
import { createStore, applyMiddleware } from '../redux'
import logger1 from '../redux-logger1'
import logger2 from '../redux-logger2'
import thunk from '../redux-thunk'

// import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers'

// let logger = store => dispatch => action => {
//   console.log('old', store.getState())
//   dispatch(action)
//   console.log('new', store.getState())
// }

let store = applyMiddleware(thunk, logger1)(createStore)(reducers)

export default store

// let store = createStore(reducers)
// let dispatch = store.dispatch
// store.dispatch = function (action) {
//   console.log('old', store.getState())
//   dispatch(action)
//   console.log('new', store.getState())
// }
