import isPlainObject from './utils/isPlainObject'
import ActionTypes from './utils/actionTypes'

export default function createStore(reducer, preloadedState) {
  if (typeof reducer !== 'function') {
    throw Error('reducer必须是一个函数')
  }

  let currentReducer = reducer
  let currentState = preloadedState
  // 订阅函数数组
  let currentListeners = []

  function getState() {
    return currentState
  }

  function dispatch(action) {
    // action必须是一个字面量对象
    // 不是new出来的
    if (!isPlainObject(action)) {
      throw new Error('action必须是一个纯对象')
    }
    if (typeof action === 'undefined') {
      throw new Error('type不能为undefinded')
    }
    currentState = currentReducer(currentState, action)
    // 通知订阅者
    for (let i = 0; i < currentListeners.length; i++) {
      let listener = currentListeners[i]
      listener()
    }

    return action
  }

  dispatch({
    type: ActionTypes.INIT
  })

  function subscribe(listener) {
    let subscribed = true
    currentListeners.push(listener)

    return function unsubscribe() {
      if (!subscribed) return
      let index = currentListeners.indexOf(listener)
      currentListeners.splice(index, 1)
      subscribed = false
    }
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}
