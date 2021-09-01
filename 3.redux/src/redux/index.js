import createStore from './createStore'
import combineReducers from './combineReducers'
import bindActionCreators from './combineReducers'
import applyMiddleware from './applyMiddleware'

// eslint-disable-next-line import/no-anonymous-default-export
export {
  createStore,
  combineReducers,
  // 把actionCreator 和 dispatch方法绑定在一起
  bindActionCreators,
  applyMiddleware
}
