import { call, put, race, take } from 'redux-saga/effects'
import { delay } from '../utils'
import * as types from '../action-type'

function* start() {
  while (true) {
    yield call(delay, 1000)
    yield put({
      type: types.INCREMENT
    })
  }
}

export default function* () {
  // race 第一个完成，就完成
  yield race({
    start: call(start),
    stop: take(types.CANCEL_COUNTER)
  })
}
