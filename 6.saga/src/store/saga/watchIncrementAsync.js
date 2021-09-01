import { put, takeEvery, take, call, apply, all, cps, select } from 'redux-saga/effects'
import * as types from '../action-type'
import { delay } from '../utils'

// worker saga
// eslint-disable-next-line require-yield
export function* incrementAsync() {
  // try {
  //   // 相当于.then await
  //   // 当yield 一个promise saga中间件可以接收到这个promise,它会等待这个promise完成
  //   let msg = yield delay(1000)
  //   // let msg = yield call(delay, 1000)
  //   // 系统自带的 delay 返回一个对象 {type: CALL, payload:{...}}
  //   // yield delay(1000)
  //   // 绑定this
  //   // yield call([obj,delay],1000)
  //   // yield apply(obj,delay,[1000])
  //   // put 向仓库派发INCREMENT动作
  //   yield put({
  //     type: types.INCREMENT
  //   })
  // } catch (error) {
  //   alert(error)
  // }
  // let { code, data, error } = yield delay(1000)
  // let { code, data, error } = yield call(delay, 1000)
  // if (code === 0) {
  //   yield put({
  //     type: types.INCREMENT
  //   })
  // } else {
  //   alert(error)
  // }
}

function* increment() {
  yield call(delay, 1000)

  yield put({
    type: types.INCREMENT
  })
}

export function* watchIncrementAsync() {
  for (let i = 0; i < 3; i++) {
    // take只监听一次ASYNC_INCREMENT动作
    console.log('---------1-----------')
    const action = yield take(types.ASYNC_INCREMENT)
    console.log('---------3-----------')
    // 派发action
    // yield put({
    //   type: types.INCREMENT
    // })
    yield increment() //iterator
  }
  alert('最多执行3次')
}

export function* watchAndLog() {
  console.log('watchAndLog')
  while (true) {
    // 匹配所有动作
    let action = yield take('*')
    console.log(action)
    // saga中获取最新的状态树
    let state = yield select(state => state.counter)
    console.log('state', state)
  }
}

// eslint-disable-next-line require-yield
// 监听saga
export function* _() {
  // 监听saga takeEvery 监听每一次action的ASYNC_INCREMENT动作，每次监听到该动作，就会让另一个workersaga执行 第二个参数就是workersaga
  // 每当yield 一个值 这个值一般是effect 就告诉saga中间件进行某些处理
  // yield takeEvery(types.ASYNC_INCREMENT, incrementAsync)
  // take
  yield all([watchAndLog(), watchIncrementAsync()])
}
