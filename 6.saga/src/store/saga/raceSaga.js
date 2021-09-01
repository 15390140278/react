import { call, race } from 'redux-saga/effects'
import { delay } from '../utils'
export default function* () {
  // race 第一个完成，就完成
  const { a, b } = yield race({
    a: call(delay, 1000),
    b: call(delay, 2000)
  })
  console.log('a=', a, 'b=', b)
}
