import createStore from './redux'
// import { createStore } from 'redux'

let initState = 0
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function reducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}
let store = createStore(reducer)
// let store = createStore(reducer, initState)

let containerValue = document.getElementById('container-value')
let incrementBtn = document.getElementById('increment-btn')
let decrementBtn = document.getElementById('decrement-btn')

function render() {
  containerValue.innerHTML = store.getState()
}

render()

// 返回一个取消订阅的方法
let unsubscribe = store.subscribe(render)

setTimeout(_ => {
  unsubscribe()
}, 3000)

incrementBtn.addEventListener('click', function () {
  store.dispatch({
    type: INCREMENT
  })
})
decrementBtn.addEventListener('click', function () {
  store.dispatch({
    type: DECREMENT
  })
})
