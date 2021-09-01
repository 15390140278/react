import { call, put, take, fork, cancel, cancelled } from 'redux-saga/effects'
import * as types from '../action-type'
import Api from '../Api'

function* login(username, password) {
  try {
    Api.setItem('loading', 'true')
    const token = yield call(Api.login, username, password)
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: token
    })
    Api.setItem('loading', 'false')
    // return token
  } catch (error) {
    alert(error)
    yield put({
      type: types.LOGIN_ERROR,
      error
    })
    Api.setItem('loading', 'false')
  } finally {
    // 有取消任务
    if (yield cancelled) {
      Api.setItem('loading', 'false')
    }
  }
}

export default function* () {
  while (true) {
    // action=
    // {
    //   type: types.LOGIN,
    //   payload: {
    //     username,
    //     password
    //   }
    // }
    // 拦截到action
    let {
      payload: { username, password }
    } = yield take(types.LOGIN)
    // const token = yield call(login, username, password)
    // if (token) {
    //   yield put({
    //     type: types.LOGIN_SUCCESS,
    //     payload: token
    //   })
    //   // 监听退出动作，并拦截到action
    //   let logoutAction = yield take(types.LOGOUT)
    //   yield put({
    //     type: types.LOGOUT_SUCCESS
    //   })
    // }
    // 相当于开启了一个子进程，会单独去执行，不会影响当前的主进程
    // 返回值是一个任务对象，拿不到login的返回值
    const task = yield fork(login, username, password)
    const action = yield take(types.LOGOUT)
    if (action.type === types.LOGOUT) {
      // 取消任务
      yield cancel(task)
    }
    yield put({
      type: types.LOGOUT_SUCCESS
    })
  }
}
