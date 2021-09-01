import types from '../action-types'

export default {
  increment() {
    // store.dispatch({ type: INCREMENT }) 派发并返回{type: INCREMENT}
    // 只返回不派发 解耦
    return {
      type: types.INCREMENT
    }
  },
  decrement() {
    // store.dispatch({ type: DECREMENT })
    return {
      type: types.DECREMENT
    }
  },
  asyncIncrement() {
    return function (dispatch, getState) {
      setTimeout(() => {
        console.log('ok')
        dispatch({
          type: types.INCREMENT
        })
      }, 1000)
    }
  },
  promiseIncrement() {
    return {
      type: types.INCREMENT,
      payload: new Promise((resove, reject) => {
        setTimeout(() => {
          let result = Math.random()
          if (result > 0.5) {
            resove({ number: result })
          } else {
            reject({ number: result })
          }
        }, 1000)
      })
    }
  }
}
