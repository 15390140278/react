import test from 'tape'
import { call, put } from 'redux-saga/effects'
import delay from './utils'
import * as types from './action-type'
import { incrementAsync } from './saga/watchIncrementAsync'
test('incrementAsync saga test', function (assert) {
  let gen = incrementAsync()
  assert.deepEqual(gen.next().value, call(delay, 1000), 'success1')
  assert.deepEqual(
    gen.next().value,
    put({
      type: types.INCREMENT
    }),
    'success2'
  )
  assert.end()
})
