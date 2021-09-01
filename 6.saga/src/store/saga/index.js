import { all, call, cps } from 'redux-saga/effects'
import { watchIncrementAsync, watchAndLog } from './watchIncrementAsync'
import loginSaga from './loginSaga'
import raceSaga from './raceSaga'
import raceSaga2 from './raceSaga2'

import { readFile } from '../utils'

export function* readAsync() {
  // call只能调用返回一个promise的方法，
  // cps 可以调用传入回调的方法，并得到回调中的值
  // let content = yield call(readFile, 'README.md')
  let content = yield cps(readFile, 'README.md')
  console.log(content)
}

/**
 * 1.rootSaga 入口saga，组织调用别的saga
 * 2.监听saga ,监听向仓库派发的动作，如果监听到某些动作会通知worker saga去执行
 * 3.worker saga真正干活的saga
 *  yield 后面的值都会发送给saga中间件
 */

// 处理多个saga
export default function* rootSaga() {
  // 类似于promise.all, 等待helloSaga和watchIncrementAsync都执行完成，才往后执行
  // all() 返回值 {type: 'ALL', payload:[helloSaga,watchIncrementAsync]}
  // console.log(all([helloSaga(), watchIncrementAsync()]))
  // yield all([helloSaga(), watchIncrementAsync(), readAsync()])

  // yield all([watchAndLog(), watchIncrementAsync(), loginSaga()])
  yield all([raceSaga2()])
}
