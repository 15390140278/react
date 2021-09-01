import types from '../action-types'

export default {
  increment() {
    // store.dispatch({ type: INCREMENT }) 派发并返回{type: INCREMENT}
    // 只返回不派发 解耦
    return {
      type: types.INCREMENT1
    }
  },
  decrement() {
    // store.dispatch({ type: DECREMENT })
    return {
      type: types.DECREMENT1
    }
  }
}
