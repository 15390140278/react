/*
 * @Author: your name
 * @Date: 2021-06-10 21:27:45
 * @LastEditTime: 2021-06-10 21:48:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \3.redux\src\redux-logger.js
 */
// 重写dispatch方法
export default function logger2({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      console.log('old2', getState())
      next(action)
      console.log('new2', getState())
    }
  }
}
