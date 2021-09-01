/*
 * @Author: your name
 * @Date: 2021-06-10 21:30:20
 * @LastEditTime: 2021-06-10 22:03:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \3.redux\src\redux\applyMiddleware.js
 */
import compose from '../compose'

export default function applyMiddleware(...middlewares) {
  //[logger1,logger2] [thunk,logger1]
  return function (createStore) {
    return function (reducers) {
      // 原始仓库
      let store = createStore(reducers)
      // 重写dispatch方法
      let dispatch = () => {
        throw Error('现在不能用')
      }
      let middlewareAPI = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args)
      }
      //[func(next)=>func(action) ,func(next)=>func(action)]
      const chain = middlewares.map(middleware => middleware(middlewareAPI))
      // 重写后的dispatch方法
      dispatch = compose(...chain)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}
