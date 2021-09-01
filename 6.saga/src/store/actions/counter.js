import * as types from '../action-type'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  increment() {
    // 通过Put派发，不会走这里
    console.log('---------4-----------')
    return {
      type: types.INCREMENT
    }
  },
  decrement() {
    return {
      type: types.DECREMENT
    }
  },
  asyncIncrement() {
    console.log('---------2-----------')
    return {
      type: types.ASYNC_INCREMENT
    }
  },
  stop() {
    return {
      type: types.CANCEL_COUNTER
    }
  }
}
