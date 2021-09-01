export default function (reducers) {
  // 将reducers分开处理，最后将结果合并返回
  const reducerKeys = Object.keys(reducers)
  return function (state = {}, action) {
    const nextState = {}
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
    }
    return nextState
  }
}
